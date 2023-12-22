const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 1188,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    mainWindow.setMenu(null);
    // Load the HTML file
    mainWindow.loadFile('index.html');

    // Open the DevTools (for development purposes)
    // mainWindow.webContents.openDevTools();

    //     // Create a menu template
    //     const template = [
    //         {
    //             label: 'File',
    //             submenu: [
    //                 {
    //                     label: 'Open Configuration',
    //                     accelerator: 'CmdOrCtrl+O', // Keyboard shortcut (Cmd for macOS, Ctrl for Windows/Linux)
    //                     click: () => {
    //                         // Add code to open a file dialog and load a configuration file
    //                     },
    //                 },
    //                 {
    //                     label: 'Save Configuration',
    //                     accelerator: 'CmdOrCtrl+S',
    //                     click: () => {
    //                         // Add code to save the configuration file
    //                     },
    //                 },
    //                 { type: 'separator' }, // Separator line
    //                 {
    //                     label: 'Exit',
    //                     role: 'quit', // Standard role for quitting the application
    //                 },
    //             ],
    //         },
    //         {
    //             label: 'Edit',
    //             submenu: [
    //                 {
    //                     label: 'Undo',
    //                     accelerator: 'CmdOrCtrl+Z',
    //                     role: 'undo',
    //                 },
    //                 {
    //                     label: 'Redo',
    //                     accelerator: 'CmdOrCtrl+Shift+Z',
    //                     role: 'redo',
    //                 },
    //                 { type: 'separator' },
    //                 {
    //                     label: 'Cut',
    //                     accelerator: 'CmdOrCtrl+X',
    //                     role: 'cut',
    //                 },
    //                 {
    //                     label: 'Copy',
    //                     accelerator: 'CmdOrCtrl+C',
    //                     role: 'copy',
    //                 },
    //                 {
    //                     label: 'Paste',
    //                     accelerator: 'CmdOrCtrl+V',
    //                     role: 'paste',
    //                 },
    //                 {
    //                     label: 'Select All',
    //                     accelerator: 'CmdOrCtrl+A',
    //                     role: 'selectAll',
    //                 },
    //             ],
    //         },
    //         // Add more menu items or submenus as needed
    //     ];

    //     // Create the menu
    //     const menu = Menu.buildFromTemplate(template);

    //     // Set the application menu
    //     Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

// Save window state before quitting
app.on('before-quit', () => {
    const windowState = {
        bounds: mainWindow.getBounds(),
    };
    fs.writeFileSync(path.join(app.getPath('userData'), 'windowState.json'), JSON.stringify(windowState));
});


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
