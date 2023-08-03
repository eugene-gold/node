const fs = require('fs')

try {
    fs.writeFileSync('./first.txt', 'first file text')
    console.log('writed')
    fs.appendFileSync('./first.txt', '\nadded new string')
    console.log('more text')
    fs.renameSync('./first.txt', './first_renamed.txt')
    console.log('file renamed')
} catch (e) {
    console.log(e)
}
