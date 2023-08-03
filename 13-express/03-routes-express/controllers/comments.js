const getCommentsHandler = (req, resp) => {
    resp.send('Get comments routes')
}

const getSingleHandler = (req, resp) => {
    resp.send('Get !comment! routes ' + req.params.commentId)
}

const postCommentHandler = (req, resp) => {
    resp.send('Post comments')
}

const deleteCommentHandler = (req, resp) => {
    resp.send('Delete Comment Route ' + req.params.commentId)
}

module.exports = {
    deleteCommentHandler,
    getCommentsHandler,
    getSingleHandler,
    postCommentHandler,
}
