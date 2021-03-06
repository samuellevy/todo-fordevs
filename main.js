const electron = require('electron');
const { dialog } = require('electron');

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname);

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

const options = {
    type: 'question',
    buttons: ['Cancel', 'Yes, please', 'No, thanks'],
    defaultId: 2,
    title: 'Question',
    message: 'Do you want to do this?',
    detail: 'It does not really matter',
    checkboxLabel: 'Remember my answer',
    checkboxChecked: true,
};


app.on('ready', function () {
    let win = new BrowserWindow({width: 360, height: 700, x: 0, y: 0});
    // win.loadFile('index.html');
    win.loadURL('http://localhost:5000/')
    const menuTemplate = [
        {
            label: 'File',
            submenu: [
                {
                    label: 'Sobre',
                    click: () => {
                        dialog.showMessageBox(null, options, (response, checkboxChecked) => {
                            console.log(response);
                            console.log(checkboxChecked);
                        });
                    }
                }, {
                    label: 'Quit',
                    click: () => {
                        app.quit();
                    }
                }
            ]
        }
    ];
    const menu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(menu);
});