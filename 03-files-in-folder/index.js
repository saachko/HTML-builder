const fs = require('fs');
const path = require('path');

const pathToFolder = path.join(__dirname, 'secret-folder');
  
fs.readdir(pathToFolder, {withFileTypes: true}, (err, files) => {
  if(err) throw err;

  files.forEach((file) => {
    if(!file.isDirectory()) {
      const pathToFile = path.join(__dirname,'secret-folder', file.name);

      let name = file.name.split('.')[0];
      let extname = path.extname(file.name).slice(1);

      fs.stat(pathToFile, (err, stats) => {
        if(err) throw err;

        console.log(name + ' - ' + extname + ' - ' + stats.size + 'b');
      });
    };
  });
});