import path from 'path'
import { app, ipcMain, BrowserWindow, dialog } from 'electron'
import sqlite3 from 'sqlite3'

const dbpath = path.join(app.getPath('userData'), 'vite-electron-ts-sqlite3.db')

ipcMain.handle('check-database', async () => {
  const db = new sqlite3.Database(dbpath, err => {
    if (err) {
      console.log(err)
    } else {
      const mainWindow = BrowserWindow.getAllWindows()[0]
      dialog.showMessageBoxSync(mainWindow, {
        message: 'DB connected',
      })
    }
  })
})
