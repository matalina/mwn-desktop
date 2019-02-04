'use strict'

import electron from 'electron'
import UserConfig from '../common/config'
let path = require('path')

const app = electron.app
let isQuiting = false

UserConfig.create({
  // We'll call our data file 'user-preferences'
  configName: 'settings',
  defaults: {
    // 800x600 is the default size of our window
    windowBounds: { width: 800, height: 600 }
  }
})

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

let icon = './build/icons/icon.ico'

function createWindow () {
  /**
   * Initial window options
   */

  let { width, height } = UserConfig.get('windowBounds')
  mainWindow = new electron.BrowserWindow({
    height,
    useContentSize: true,
    width,
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
