const { app, BrowserWindow } = require('electron')

function createWindow() {
    const mainWindow = new BrowserWindow({
        frame: false,
        fullscreen: true,
        autoHideMenuBar: true,
        skipTaskbar: true,
        webPreferences: {
            devTools: false
        }
    })
    mainWindow.setBackgroundColor('#000000')
    mainWindow.loadFile('index.html')
    mainWindow.maximize()
    mainWindow.removeMenu();
    mainWindow.webContents.executeJavaScript('var percentageElement=document.getElementById("percentage"),percentage=0;function process(){if(100<=(percentage+=parseInt(10*Math.random()))){var t=["(⊙﹏⊙✿)","‘︿’","(∩︵∩)","(✖╭╮✖)","(╯︵╰,)","(◡﹏◡✿)"];let e=document.getElementById("smiley");e.innerText=t[~~(t.length*Math.random())],percentage=0}percentageElement.innerText=percentage,processInterval()}function processInterval(){setTimeout(process,500*Math.random()+500)}processInterval();')
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