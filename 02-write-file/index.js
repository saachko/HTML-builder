const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const pathToText = path.join(__dirname, 'text.txt');
const file = fs.createWriteStream(pathToText);
const rl = readline.createInterface({ input, output });

console.log('Start typing...');

rl.on('line', (text) => {
  if (text === 'exit') {
    rl.close();
  }
  file.write(text + '\n');
});

rl.on('SIGINT', () => {
  rl.close();
});

rl.on('close', () => {
  console.log('Thank you! Bye :)')
});