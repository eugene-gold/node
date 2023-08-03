import EventEmitter from 'events'

class Post extends EventEmitter {
    constructor(author, text) {
        super()
        this.author = author
        this.text = text
        this.likesQty = 0
        this.on('likePost', (userName) => {
            console.log(userName + ' liked your post!')
        })
        this.on('error', (error) => {
            console.error(error)
        })
    }

    like(userName) {
        if (!userName) {
            this.emit('error', new Error('no username'))
        } else {
            this.likesQty += 1
            this.emit('likePost', userName)
        }
    }
}

const myPost = new Post('Ramsesess', 'MeowMeow')

// console.log(myPost.author)
// console.log(myPost.likesQty)
// console.log(myPost.text)
myPost.like('Cat')
setTimeout(() => myPost.like('Me'), 2000)
setTimeout(() => myPost.like('Mom'), 1000)
// console.log(myPost.likesQty)
// setTimeout(() => console.log(myPost.likesQty), 5000)
setTimeout(() => myPost.like(), 2000)
