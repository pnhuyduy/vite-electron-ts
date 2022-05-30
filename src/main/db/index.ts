import path from 'path'
import { app, ipcMain } from 'electron'
import sqlite3 from 'sqlite3'

const dbpath = path.join(app.getPath('userData'), 'vite-electron-ts-sqlite3.db')
const db = new sqlite3.Database(dbpath)

ipcMain.handle('check-database', async event => {
  db.serialize(() => {
    db.run('ELECT rowid AS id, info FROM lorem')

    const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
    for (let i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i)
    }
    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
      console.log(row.id + ': ' + row.info)
    })
  })
})
