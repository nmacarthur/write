const { app, BrowserWindow, ipcMain, dialog, globalShortcut } = require('electron')
const path = require('path')

async function createWindow () {
	const win = new BrowserWindow({
		width: 780,
		height: 462,
		minWidth: 380,
		minHeight: 360,
		backgroundColor: '#D3D0CB',
		titleBarStyle: 'hidden',
		movable: true,
		icon: path.join(`${__dirname}/src/media/`, { 
			darwin: 'icon.icns', 
			linux: 'icon.png', 
			win32: 'icon.ico' }[process.platform] || 'icon.ico'),
		webPreferences: { 
			zoomFactor: 1.0, 
			nodeIntegration: true, 
			backgroundThrottling: false 
		}
	})

  	win.loadURL(`file://${__dirname}/src/index.html`)

	ipcMain.handle('select-dirs', async (event, arg) => {
		const result = await dialog.showSaveDialog(win, {
			properties: ['openDirectory']
		})
		return result;
	})

	ipcMain.handle('select-file', async (event, arg) => {
		const result = await dialog.showOpenDialog(win, {
			properties: ['openFile']
		})
		return result;
	}) 

	// globalShortcut.register('CommandOrControl+S', () => {
	// 	win.webContents.send('save');
	// })

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