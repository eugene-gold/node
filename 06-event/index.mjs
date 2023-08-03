import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

const timeoutListenerFn = (seconds) => {
    console.log('Timeout event! ' + seconds + 'sec')
}

myEmitter.on('timeout', timeoutListenerFn)

setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)

myEmitter.once('singleEvent', () => {
    console.log('single event occured')
})

setTimeout(() => myEmitter.emit('singleEvent'), 500)
setTimeout(() => myEmitter.emit('singleEvent'), 1200)

setTimeout(() => myEmitter.off('timeout', timeoutListenerFn), 3000)
setTimeout(() => myEmitter.emit('timeout', 1), 4000)
