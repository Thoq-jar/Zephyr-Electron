const { app, BrowserWindow } = require('electron');

app.setName('Zephyr Cloud');

function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        icon: __dirname + '/icon.png',
        webPreferences: {
            nodeIntegration: true
        },
        title: "Zephyr Cloud"
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
