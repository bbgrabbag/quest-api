const ex = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { handleAudioUpload, handlePrompt } = require('./handlers');

const uploader = multer({
    storage: multer.memoryStorage()
});

const server = ex();
server.use(
    cors({ origin: process.env.ORIGIN_WHITELIST.split(',') }),
    ex.json(),
    (req, res, next) => {
        console.log('\n', req.method, req.url, req.body);
        next()
    });

server.get('/', ex.static(path.join(__dirname, 'static')),(req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'static', 'api-reference.html'))
});

server.post('/audio', uploader.single('file'), handleAudioUpload)
server.post('/prompt', handlePrompt)

module.exports = {
    server
}