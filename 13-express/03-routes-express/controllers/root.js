const getRootHandler = (req, resp) => {
    resp.send('Get root route')
}

module.exports = {
    getRootHandler,
}
