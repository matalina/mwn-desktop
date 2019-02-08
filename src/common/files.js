const electron = require('electron')
const path = require('path')
const fs = require('fs')

function parseDataFile (filePath, defaults) {
  // We'll try/catch it in case the file doesn't exist yet, which will be the case on the first application run.
  // `fs.readFileSync` will return a JSON string which we then parse into a Javascript object
  try {
    return JSON.parse(fs.readFileSync(filePath))
  } catch (error) {
    // if there was some kind of error, return the passed in defaults instead.
    return {}
  }
}

export default {
  path: null,
  data: {},
  open () {
    // Renderer process has to get `app` module via `remote`, whereas the main process can get it directly
    // app.getPath('userData') will return a string of the user's app data directory path.
    const userDataPath = (electron.app || electron.remote.app).getPath('userData')
    // We'll use the `configName` property to set the file name and path.join to bring it all together as a string
    this.path = path.join(userDataPath, 'files.json')

    this.data = parseDataFile(this.path)

    return this
  },

  // get file data object
  get (file) {
    return this.data[file]
  },

  // create file data object
  create (file, object) {
    this.data[file] = object
  },

  // update file object with specific key/value
  update (file, key, value) {
    this.data[file][key] = value
  },

  // write to file
  save () {
    fs.writeFileSync(this.path, JSON.stringify(this.data))
  }
}
