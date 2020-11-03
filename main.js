'use strict';

const { app, BrowserWindow } = require('electron')

require('electron-reload')(__dirname);

function createWindow(){
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        maximizable: false,
        autoHideMenuBar: true,  //Mostrar barra menu principal
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    win.loadFile('main.html')
    
    // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
})