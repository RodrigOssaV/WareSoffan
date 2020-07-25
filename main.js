const { app, BrowserWindow } = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 1024,
        height: 768,
        maximizable: false,
        // autoHideMenuBar: true,  //Mostrar barra menu principal
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./pages/index.html')
    
    win.webContents.openDevTools()
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