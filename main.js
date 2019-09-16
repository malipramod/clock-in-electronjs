const { app, BrowserWindow } = require('electron');
// const path = require('path');

//For Reloading App whenever any changes to app is made. Dev. Dependencies
// require('electron-reload')(__dirname, {
//     electron: require(`${__dirname}/node_modules/electron`)
// });

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 500,
        height: 464,
        webPreferences: {
            nodeIntegration: true
        },
        // transparent: true, frame: false
    });

    win.loadFile('./app/index.html');

    win.removeMenu();
    // win.webContents.openDevTools();

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)
