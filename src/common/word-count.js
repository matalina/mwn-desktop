var fs = require('fs');


if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " path/to/directory");
    process.exit(-1);
}

var path = process.argv[2];
let count = 0;

fs.readdir(path, (err, items) => {
    for (var i=0; i<items.length; i++) {
      let item = items[i];
      let parts = item.split('.');
      let file = path + '/' + item;
      //console.log(file);
      if(parts[parts.length - 1] === 'md') {

        let contents = fs.readFileSync(file, 'utf8');
        let words = contents.split(/(\s+)/);
        //console.log(words.length); return;
        count += words.length;
      }
    }
    console.log(count);
});
