import classes from './index.module.sass';
import { window } from '@config';
import { useTranslation } from 'react-i18next';
import { version } from '../../../../../package.json';

export default function InfoPage() {
    const { t } = useTranslation('common');
    return (
        <div className={classes.options}>
            
            <div className={classes.launcherName}>
                <center>
                    <h1>{window.title}</h1>
                    <p>Ванильный Minecraft сервер для начинающих</p>
                </center>
            </div>
            
            <div className={classes.projectInfo}>
                <h3>О проекте:</h3>
                <ul>
                    <li>Классический ванильный геймплей</li>
                    <li>Идеально для новичков в Minecraft</li>
                    <li>Стабильная работа и честное администрирование</li>
                    <li>Регулярные обновления и техническая поддержка</li>
                    <li>Дружелюбное сообщество игроков</li>
                </ul>
            </div>

            <div className={classes.version}>
                <h5>{t('settings.version')} {version}</h5>
            </div>
        </div>
    );
}