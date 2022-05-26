import { join } from 'path'
import { BrowserWindow, app } from 'electron'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

const isDev = process.env.NODE_ENV === 'development'
const WinURL = isDev
  ? 'http://localhost:3000'
  : `file://${join(__dirname, '../../dist/render/index.html')}`

let mainWindow: BrowserWindow | null = null
let willQuitApp = false

function createWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1140,
    minHeight: 700,
    width: 1240,
    height: 700,
    titleBarStyle: 'hidden',
    webPreferences: {
      contextIsolation: false,
      // enableRemoteModule: false,
      // webSecurity: true,
      nodeIntegration: true,
    },
  })

  if (isDev) {
    // Open the DevTools.
    mainWindow.webContents.openDevTools()
  }
  // and load the index.html of the app.
  mainWindow.loadURL(WinURL)
  mainWindow.on('close', event => {
    if (!willQuitApp) {
      event.preventDefault()
      mainWindow?.hide()
    }
  })
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow?.show()
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (!mainWindow) createWindow()
  else mainWindow.show()
})
app.on('before-quit', () => (willQuitApp = true))
