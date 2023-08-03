const fs = require('fs')

fs.writeFile('./first.txt', 'first file text', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('writed')
        fs.appendFile('./first.txt', '\nadded new string', (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('more text')
                fs.rename('./first.txt', './first_renamed.txt', (err) => {
                    if (err) {
                        console.log(err)
                    } else console.log('file renamed')
                })
            }
        })
    }
})
