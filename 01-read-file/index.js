const fs = require('fs');
const path = require('path');

const pathToText = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(pathToText, 'utf8');

readStream.on('data', (chunk) => {
  console.log(chunk);
});