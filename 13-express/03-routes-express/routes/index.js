const express = require('express')
const router = express.Router()
const commentsRouter = require('./comments')
const usersRouter = require('./users')
const rootRouter = require('./root')

router.use('/', rootRouter)
router.use('/comments', commentsRouter)
router.use('/users', usersRouter)

module.exports = router
