import { join } from 'path'
import { BrowserWindow, app, dialog, ipcMain } from 'electron'
import { Nullable } from 'src/common/types'
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const isDev = process.env.NODE_ENV === 'development'
const WinURL = isDev
  ? 'http://localhost:3000'
  : `file://${join(__dirname, '../../dist/render/index.html')}`

let mainWindow: Nullable<BrowserWindow> = null

import './db'

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1140,
    minHeight: 700,
    width: 1240,
    height: 700,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
    },
  })

  if (isDev) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
  }
  // and load the index.html of the app.
  mainWindow.loadURL(WinURL)

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show()
  })

  return mainWindow
}

async function restoreOrCreateWindow() {
  if (mainWindow?.isMinimized()) mainWindow?.restore()
  if (mainWindow) mainWindow?.focus()
  else createWindow()
}

app.on('ready', createWindow)

app.on('activate', async () => {
  try {
    await restoreOrCreateWindow()
  } catch (error) {
    app.quit()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', async () => {
  try {
    await restoreOrCreateWindow()
  } catch (error) {
    app.quit()
  }
})

ipcMain.handle('show-dialog', (event, arg) => {
  dialog.showMessageBoxSync(mainWindow, {
    message: `received message from render process: ${arg}`,
  })
})
