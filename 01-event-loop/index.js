const fs = require('fs')
const dns = require('dns');

function timestamp(text) {
    console.log(text, performance.now().toFixed(2) );
}

console.log('start');



fs.writeFile('./test.js', 'some text', () => timestamp('file edited'))

Promise.resolve().then(() => timestamp('promise'))

process.nextTick(()=> timestamp('Nextick 1'))

setImmediate(()=> timestamp('immidiate'))


setTimeout(()=> timestamp('timeout'))
setTimeout(()=> {
    process.nextTick(()=> timestamp('Nextick2 in Settimout2'))
    timestamp('timeout2')
}, 100)

let intCount = 0
const interval = setInterval(()=> {
    timestamp(`setInterval ${intCount += 1}`)
    if(intCount === 2) {
        clearInterval(interval)
    }
}, 50)

dns.lookup('localhost', (err, address, family) => {
    console.log(address)
    timestamp('DNS 1 localhost')
    Promise.resolve().then(()=> timestamp('Promise 2 in DNS'))
    process.nextTick(()=> timestamp('Nextick 3 in DNS'))

})

console.log('end');