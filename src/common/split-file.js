var fs = require('fs')
var path = require('path')
var file = process.argv[2]

let contents = fs.readFileSync(file, 'utf8')
let scenes = contents.split(/(#)/)
let count = 1;
for(let i in scenes) {
  let scene = scenes[i]

  if(scene.trim() !== '' && scene.trim() !== '#') {
    fs.writeFileSync(path.join(__dirname, count.toString().padStart(3,'0') + '.md'),'#' + scene)
    count++;
  }
}
