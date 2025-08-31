const publicKey = '-----BEGIN PUBLIC KEY-----\n' +
    'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA34H6UXnhIQf6qYy7BUxY\n' +
    'lk0WDhqmliNx2r0OulmYv9+XXRruNZopirZqS3FW5kdA8YcxnNDdWEXXGgFChX0L\n' +
    'VKFRoQxQ/euSgJJKPmvYtinON3apenWMT8lKG4ADG00nezJD7qxqyPzt2dwNn6xC\n' +
    '6ESEi9CqmXY40YMn7hyA+EJRATGtzEzRcYx6Sz90In0zmyT5VYrlMHw2y7RHlwSY\n' +
    'K/CUq9JiBPNXEQVKOGB/CXl2Wqk91MjDGolEXmUxnyOKAlr6/3PTWtz300ZVzHOr\n' +
    'hmxnSUWy+RivVQMwjTesYcR6/WR9BqFHNCTjYLvinK/hxxVOMEkaX2DoKBrI/zeh\n' +
    '5IRy8ZDo8GlLNoaN1u2oSBpCdHOAtMTG8iZtxPaDqflYeZ3mUp1TOWksxgYRFHFr\n' +
    '8031i7RUHf7AaZcobgNym4SYXjgvQHGiuqiKxDA8isBPmbJ73fTsTyZxSBgdOr/A\n' +
    'q8i98RjmbBIElbQKaowR03mkVMFVaoI25xBkTweaKQ+iAakDWUo2MumbWttsafdA\n' +
    '88SnDDHLWcRUItLdIe1LL4tmOYwHbxscBihvtP17NBltNviB5uvAggKLCY82DkDj\n' +
    'zwm/4NemtovVMhWbjomz0AYilvZSHWx/BUvbuTJyCo0b5gdGKJOlAbL024iE9RbT\n' +
    '8T2ocOPZgYSnOfHu+vVDEZ8CAwEAAQ==\n' +
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
    ws: 'ws://64.188.76.52:1370/ws',
    web: 'http://64.188.76.52:1370',
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

