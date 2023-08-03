const express = require('express')
const router = express.Router()

const {
    getSingleUsersHandler,
    getUsersHandler,
    postUsersHandler,
} = require('../controllers/users')

router.get('/', getUsersHandler)
router.post('/', postUsersHandler)
router.get('/:usersID', getSingleUsersHandler)

module.exports = router
