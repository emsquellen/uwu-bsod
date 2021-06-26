

const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow() {
    const mainWindow = new BrowserWindow({
        frame: false,
        fullscreen: true,
        autoHideMenuBar: true,
        webPreferences: {
            devTools: false
        }
    })
    mainWindow.setBackgroundColor('#3973aa')
    mainWindow.loadFile('index.html')
    mainWindow.maximize()
    mainWindow.removeMenu();
}
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})