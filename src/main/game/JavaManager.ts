import { existsSync } from 'fs';
import { chmod, readdir, rm } from 'fs/promises';
import { join } from 'path';

import { HashHelper, HttpHelper, ZipHelper } from '@aurora-launcher/core';
import { Service } from '@freshgum/typedi';

import { Architecture, Platform } from '../core/System';
import { PlatformHelper } from '../helpers/PlatformHelper';
import { StorageHelper } from '../helpers/StorageHelper';
import { GameWindow } from './GameWindow';

@Service([])
export class JavaManager {
    async checkAndDownloadJava(majorVersion: number, gameWindow: GameWindow) {
        const javaDir = this.#getJavaDir(majorVersion);
        if (existsSync(javaDir)) return true;

        const javaLink =
            'https://api.azul.com/metadata/v1/zulu/packages/?java_version={version}&os={os}&arch={arch}&archive_type=zip&java_package_type=jre&javafx_bundled=false&latest=true&release_status=ga&page=1&page_size=1';

        gameWindow.sendToConsole('Download Java');
        const javaData = await HttpHelper.getResourceFromJson<JavaData[]>(
            javaLink
                .replace('{version}', majorVersion.toString())
                .replace('{os}', this.#getOs())
                .replace('{arch}', this.#getArch()),
        );
        const javaFile = await HttpHelper.downloadFile(
            javaData[0].download_url,
            null,
            {
                saveToTempFile: true,
                onProgress: (progress) => {
                    gameWindow.sendProgress({
                        total: progress.total,
                        loaded: progress.transferred,
                        type: 'size',
                    });
                },
            },
        );
        gameWindow.sendToConsole('Validate Java');

        const detailsLink =
            'https://api.azul.com/metadata/v1/zulu/packages/{guid}';
        const detailsData = await HttpHelper.getResourceFromJson<JavaDetails>(
            detailsLink.replace('{guid}', javaData[0].package_uuid),
        );

        if (
            !HashHelper.compareFileHash(javaFile, 'md5', detailsData.md5_hash)
        ) {
            rm(javaFile);
            rm(javaDir);
            throw new Error('Java validation failed');
        }

        gameWindow.sendToConsole('Unpacking Java');
        const extractFile = await ZipHelper.unzip(javaFile, javaDir);
        // Проверка хешей в архиве и на диске (проверить её надобность)
        for (const file of extractFile) {
            if (
                !HashHelper.compareFileHash(join(javaDir, file.path), 'sha1', file.sha1)
            ) {
                rm(javaFile);
                rm(javaDir);
                throw new Error('Java validation failed');
            }
        }
        if (PlatformHelper.isLinux || PlatformHelper.isMac) {
            await chmod(await this.getJavaPath(majorVersion), 744);
        }
    }

    async getJavaPath(majorVersion: number) {
        const path = ['bin', 'java'];
        if (PlatformHelper.isMac) {
            path.unshift(`zulu-${majorVersion}.jre`, 'Contents', 'Home');
        }

        const javaVerPath = this.#getJavaDir(majorVersion);
        const firstDir = (await readdir(javaVerPath))[0];

        return join(javaVerPath, firstDir, ...path);
    }

    #getJavaDir(majorVersion: number) {
        return join(StorageHelper.javaDir, majorVersion.toString());
    }

    #getOs() {
        const PlatformToJavaOS = {
            [Platform.WINDOWS]: JavaOs.WINDOWS,
            [Platform.MACOS]: JavaOs.MAC,
            [Platform.LINUX]: JavaOs.LINUX,
        };
        return PlatformToJavaOS[<Platform>process.platform] || process.platform;
    }

    #getArch() {
        const ArchitectureToJavaOS = {
            [Architecture.X32]: JavaArchitecture.X32,
            [Architecture.X64]: JavaArchitecture.X64,
            [Architecture.ARM]: JavaArchitecture.ARM,
            [Architecture.ARM64]: JavaArchitecture.ARM64,
        };
        return ArchitectureToJavaOS[<Architecture>process.arch] || process.arch;
    }
}

enum JavaOs {
    WINDOWS = 'windows',
    MAC = 'macos',
    LINUX = 'linux',
}

enum JavaArchitecture {
    ARM = 'aarch32',
    ARM64 = 'aarch64',
    X32 = 'i686',
    X64 = 'x64',
}

interface JavaData {
    package_uuid: string;
    download_url: URL;
}

interface JavaDetails {
    md5_hash: string;
}
