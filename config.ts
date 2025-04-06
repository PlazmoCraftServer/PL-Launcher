const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
    'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA8FhVppuhFW7Kqn1sOCY4\n' +
    'Qd8ttTY5BbCCElTbuNmAmqp9kW4V3OofqXZK5Z3FJOsi0iiW4Sep5ehc7FplQqVV\n' +
    'pqGmCiaOqW90NGnzZSs5OMiGPM1zCg3bUqtfYXbmaJIipAVnK/F92wR07pSWoQBb\n' +
    'aghQGlRsbQq0vQLL7U9JbB2kOhXDiIHBQPfHE0ixAxeDevTYbBvlfRr6f40c3YTH\n' +
    '4nD9WA8+aChw5dt9IVPzYdrXlTAdV3x2/1KIYxMSHi15AJqBOeZZCxrBTEgqlRUp\n' +
    'KTaWSTR+QE/4my/qjm3HrNmNYplpny3BjvfG74g9InCY2zWnxryA0+gtzhv7CxJM\n' +
    'CW3F1WD4DKAhG2s4SeA3C7JwN+k+AwGLciD47eHuXvN36RKuiKAGXMUj1QfR0Nd4\n' +
    'znrXe0QAJCJtSk1m1EwFeOZLTumOLGpgoiieEVKqEvkjR7msyYG7Se55OYw+Aa+J\n' +
    'FET1ZMtpilqGeX/CxFrUZtXQk8h5OM5JmLA2Zm6oeCVU1nISgEzBURxS/kAMpOil\n' +
    'T6/kSRHwRE0U9UZLSNR0eY2USatz52z0ND6SeIH6G7zZl+8P3lafloN0g+hrMeIn\n' +
    'h0dUqNFJe7D/e+OnRgd8S9u0k1dbfRWQyA/1lcl+m7B43Xu/XVsHKSjGgjeNq64q\n' +
    'TVXHSy3OmW64nEUVMoNdkskCAwEAAQ==\n' +
    '-----END PUBLIC KEY-----\n';

export const window = {
    width: 900,
    height: 550,
    frame: false,
    resizable: true,
    maximizable: false,
    fullscreenable: false,
    title: 'PL Launcher'
};

export const api = {
    ws: 'ws://107.161.154.242:1370/ws',
    web: 'http://107.161.154.242:1370',
    publicKey
};

export const appPath = '.pl-launcher';

export const discordRPC = {
    appId: '1358435099099795689',
    default: {
        firstLineText: 'Тестирую лаунчер',
        secondLineText: 'Чувак, ты думал здесь что-то будет?',
        buttons: [
            {
                label: 'Прекол',
                url: 'https://youtu.be/dQw4w9WgXcQ'
            }
        ],
        largeImageKey: 'logo',
        smallImageKey: 'logo_mc',
        largeImageText: 'PL Launcher',
        smallImageText: 'Minecraft'
    },
    profile: {  },
    game: {  }
};

