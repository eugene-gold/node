import comments from './data.mjs'
import fs from 'fs'
import qs from 'querystring'

function getHTML(req, resp) {
    resp.setHeader('Context-Type', 'text/html')
    resp.write('<html><body><div>')
    resp.write('<h1>its end</h1>')
    resp.write('</div></body></html>')
    resp.end()
}

function getText(req, resp) {
    resp.setHeader('Context-Type', 'text/plain')
    resp.end('this is plain text')
}

function getComments(req, resp) {
    resp.setHeader('Context-Type', 'application/json')
    resp.end(JSON.stringify(comments))
}

function getErrorPage(req, resp) {
    resp.setHeader('Context-Type', 'text/html')
    resp.end('<h1>Page not Found</h1>')
}

function postComment(req, resp) {
    resp.setHeader('Context-Type', 'text/plain')

    if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk.toString()
        })

        req.on('end', () => {
            try {
                const comment = qs.parse(body)
                comment.id = parseInt(comment.id)
                comments.push(comment)
                resp.statusCode = 200
                resp.setHeader('Context-Type', 'text/html')
                resp.write('<h1>comment was saved</h1>')
                resp.write('<a href="/">Back to form</a>')
                resp.end()
            } catch (error) {
                resp.statusCode = 400
                resp.end('Form data is invalid')
            }
        })
    } else if (req.headers['content-type'] === 'application/json') {
        let commentJSON = ''

        req.on('data', (chunk) => (commentJSON += chunk))

        req.on('end', () => {
            try {
                comments.push(JSON.parse(commentJSON))
                resp.statusCode = 200
                resp.end('comment was saved')
            } catch (error) {
                resp.statusCode = 400
                resp.end('JSON is invalid')
            }
        })
    } else {
        resp.statusCode = 400
        resp.end('Data must be JSON type')
    }
}

function getHome(req, resp) {
    fs.readFile('./files/comment-form.html', (err, data) => {
        if (err) {
            resp.statusCode = 500
            resp.setHeader('Context-Type', 'text/plain')
            resp.end('Server error while loading file')
        } else {
            resp.statusCode = 200
            resp.setHeader('Context-Type', 'text/html')
            resp.end(data)
        }
    })
}

export { getComments, getErrorPage, getHTML, getText, postComment, getHome }
