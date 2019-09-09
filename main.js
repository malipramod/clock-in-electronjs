const {app,BrowserWindow} = require('electron');
const path = require('path');

//For Reloading App whenever any changes to app is made. Dev. Dependencies
require('electron-reload')(__dirname,{
    electron: require(`${__dirname}/node_modules/electron`)
});

let win;
function createWindow(){
    win = new BrowserWindow({
        width: 200,
        height: 200,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('./app/index.html'); 

    win.removeMenu();
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)
