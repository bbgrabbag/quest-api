const fs = require('fs');
const path = require('path');
const { transcribeAudio } = require('./transcribe');
const { prompt } = require('./prompt')

const handleAudioUpload = async (req, res, next) => {
    try {
        const encodedVoiceClip = req.file.buffer.toString('base64');
        const transcription = await transcribeAudio(encodedVoiceClip);
        res.status(200).send({ status: 'success', transcription })
    } catch (err) {
        console.error(err)
        res.status(500).send({ err: 'Could not perform speech to text operation' })
    }
}

const handlePrompt = async (req, res, next) => {
    try {
        const answer = await prompt(req.body.text);
        res.status(200).send({ status: 'success', answer })
    } catch (err) {
        res.status(500).send({ err: 'Could not perform prompt operation' })
    }
}

module.exports = {
    handleAudioUpload,
    handlePrompt
}
