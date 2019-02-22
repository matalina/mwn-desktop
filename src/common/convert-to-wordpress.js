var fs = require('fs')

var path = process.argv[2]
let xml = '';

fs.readdir(path, (error, items) => {
  if (error) {
    console.log(error)
  }
  for (var i = 0; i < items.length; i++) {
    let item = items[i]
    let parts = item.split('.')
    let file = path + '/' + item
    // console.log(file);
    if (parts[parts.length - 1] === 'md') {
      let contents = fs.readFileSync(file, 'utf8')
      let words = contents.split(/(\s+)/)
      // console.log(words.length); return;
      count += words.length
    }
  }
  console.log(count)
})
