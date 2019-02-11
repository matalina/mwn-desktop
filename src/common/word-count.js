import File from '../../common/files'
const fs = require('fs')
const md5 = require('md5')

let f = File.open()

function isTextFile(extension) {
  switch(extension) {
    case 'md':
    case 'txt':
      return true;
    default:
      return false;
  }
}

export default {
  countWordsInFile (path) => {
    let count = 0

    let parts = path.split('.');

    if (isTextFile(parts[parts.length - 1])) {
      let contents = fs.readFileSync(path, 'utf8')
      let words = contents.trim().split(/[ \n\-]+?/);
      //console.log(words.length); return;
      count += words.filter((value) => {
        return value.trim() !== ''
      }).length
    }

    return count;
  },
  hasFileChanged (path) => {
    let parts = path.split('.');

    if (isTextFile(parts[parts.length - 1])) {
      let remote_hash = md5(fs.readFileSync(path, 'utf8'))
      let saved_hash = f.get(path).hash

      return remote_hash !== save_hash
    }

    return false;
  }
}
