//users
const getUsersHandler = (req, resp) => {
    resp.send('Get users route')
}
const postUsersHandler = (req, resp) => {
    resp.send('Post users route')
}
const getSingleUsersHandler = (req, resp) => {
    resp.send('Get User Route ' + req.params.usersID)
}

module.exports = {
    getUsersHandler,
    postUsersHandler,
    getSingleUsersHandler,
}
