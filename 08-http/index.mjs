import http, { createServer } from 'http'
import {
    getHTML,
    getComments,
    getErrorPage,
    getText,
    postComment,
    getHome,
} from './handlers.mjs'

const server = http.createServer((req, resp) => {
    if (req.method === 'GET' && req.url === '/') {
        resp.statusCode = 200
        return getHome(req, resp)
    }

    if (req.method === 'GET' && req.url === '/http') {
        resp.statusCode = 200
        return getHTML(req, resp)
    }
    if (req.method === 'GET' && req.url === '/text') {
        resp.statusCode = 200
        return getText(req, resp)
    }
    if (req.method === 'GET' && req.url === '/comments') {
        resp.statusCode = 200
        return getComments(req, resp)
    }
    if (req.method === 'POST' && req.url === '/comments') {
        resp.statusCode = 200
        return postComment(req, resp)
    }

    resp.statusCode = 404
    return getErrorPage(req, resp)
})

const PORT = 5000

server.listen(PORT, () => {
    console.log('server started on port ' + PORT)
})
