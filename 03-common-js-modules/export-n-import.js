const { myName, myHobbies } = require('./multiple-exports')

const myFriendName = 'Friend'

module.exports.myName = myName
module.exports.myFriendName = myFriendName
module.exports.myNewHobbies = myHobbies
