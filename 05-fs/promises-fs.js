const fs = require('fs/promises')

fs.writeFile('./first.txt', 'first file text')
    .then(() => console.log('writed'))
    .then(() => fs.appendFile('./first.txt', '\nadded new string'))
    .then(() => console.log('more text'))
    .then(() => fs.rename('./first.txt', './first_renamed.txt'))
    .then(() => console.log('file renamed'))
    .catch((e) => console.log(e))
