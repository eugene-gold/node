const express = require('express')
const {
    deleteCommentHandler,
    getCommentsHandler,
    getSingleHandler,
    postCommentHandler,
} = require('../controllers/comments')

const router = express.Router()

// app.route('/comment').get(getCommentsHandler).post(postCommentHandler)
router.get('/', getCommentsHandler)
router.post('/', postCommentHandler)
router.get('/:commentId', getSingleHandler)
router.delete('/:commentId', deleteCommentHandler)

module.exports = router
