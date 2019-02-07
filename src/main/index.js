'use strict'

import electron from 'electron'
let path = require('path')

const app = electron.app
let isQuiting = false
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = path.join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

let icon = './build/icons/logo.ico'

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new electron.BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    icon
  })

  mainWindow.loadURL(winURL)
  /*
  const menuTemplate = [
    {
      label: 'Electron',
      submenu: [

      ]
    }
  ]
  const menu = electron.Menu.buildFromTemplate(menuTemplate)
  electron.Menu.setApplicationMenu(menu) */

  mainWindow.setMenuBarVisibility(false)

  let tray = new electron.Tray(icon)
  let template = [{
    label: 'Open',
    click () {
      mainWindow.show()
    }
  },
  {
    label: 'Quit',
    click () {
      isQuiting = true
      app.quit()
    }
  }]

  let context = electron.Menu.buildFromTemplate(template)

  tray.setContextMenu(context)
  tray.setToolTip('My Writing Notebook')

  mainWindow.on('minimize', (event) => {
    event.preventDefault()
    mainWindow.minimize()
  })

  mainWindow.on('show', () => {
    tray.setHighlightMode('always')
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.on('close', (event) => {
    if (!isQuiting) {
      event.preventDefault()
      mainWindow.minimize()
      event.returnValue = false
    }
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
