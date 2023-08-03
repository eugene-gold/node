const { myName, myHobbies, myNumber } = require('./multiple-exports')
const {
    myName: AnotherName,
    myFriendName,
    myNewHobbies,
} = require('./export-n-import')
const greetFn = require('./myModules/single-export')
// const greetFn = require('/Users/Eugene/projects/node/03-common-js-modules/single-export')

console.log(myName)
console.log(myHobbies)
console.log(myNumber)

myHobbies.push('climbing')

greetFn(myName)
greetFn(myFriendName)
greetFn(AnotherName)

console.log(myNewHobbies)
