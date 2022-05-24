const fs = require('fs/promises');
const path = require('path');

const pathToFolder = path.join(__dirname, 'files');
const pathToFolderCopy = path.join(__dirname, 'files-copy');

async function copyDir() {

  try {
    await fs.rm(pathToFolderCopy, { recursive: true, force: true });
    await fs.mkdir(pathToFolderCopy, { recursive: true });
    
    const files = await fs.readdir(pathToFolder, {withFileTypes: true}) 

    files.forEach((file) => {
      fs.copyFile(path.join(pathToFolder, file.name), path.join(pathToFolderCopy, file.name));
    });  

  } catch (err) {
    console.log(err);
  }
}

copyDir();