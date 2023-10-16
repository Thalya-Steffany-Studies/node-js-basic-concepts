const path = require('path');
const fs = require('fs');

function filesAndFoldersCallback(error, callback) {
    if (error) return console.log(error);
    callback && callback();
};

//create a new folder
const folderPath = path.join(__dirname, '/creating-and-editing-files-and-folders');
fs.mkdir(folderPath, (error) => filesAndFoldersCallback(error))

//create a new file
const filePath = path.join(folderPath, '/new-file.js');
const fileContent = 'console.log("I am a new file created with Node.js");';

fs.writeFile(filePath, fileContent, 'utf-8', (error) => filesAndFoldersCallback(error));

//edit a file
fs.readFile(filePath, (error, data) => filesAndFoldersCallback(error, () => {
    const newContent = `${data}   
console.log('I was edited xD !');
    `;

    fs.writeFile(filePath, newContent, (error) => filesAndFoldersCallback(error))
}));