const ex = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const { handleAudioUpload, handlePrompt } = require('./handlers');

const uploader = multer({
    // storage: multer.diskStorage({
    //     destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
    //     filename: (req, file, cb) => {
    //         console.log(file);
    //         cb(null, 'voice_clip.wav')
    //     }
    // })
    storage: multer.memoryStorage()
});

const server = ex();
server.use(
    cors({ origin: process.env.ORIGIN_WHITELIST.split(',') }),
    ex.json(),
    (req, res, next) => {
        console.log(req.url);
        console.log(req.method);
        console.log(req.body);
        next()
    });

server.get('/', (req, res) => {
    res.status(200).send({ status: 'success' })
});

server.post('/audio', uploader.single('file'), handleAudioUpload)
server.post('/prompt', handlePrompt)

module.exports = {
    server
}