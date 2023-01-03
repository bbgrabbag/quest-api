const { transcribeAudio } = require('./transcribe');
const { prompt } = require('./prompt')

const handleAudioUpload = async (req, res, next) => {
    try {
        console.log('>>> MIME type: ', req.file.mimetype);
        console.log('>>> size: ', req.file.size);
        const encodedVoiceClip = req.file.buffer.toString('base64');
        const transcription = await transcribeAudio(encodedVoiceClip);
        console.log('>>> transcription: ', transcription);
        res.status(200).send({ status: 'success', transcription })
    } catch (err) {
        console.error(err)
        res.status(500).send({ err: 'Could not perform speech to text operation' })
    }
}

const handlePrompt = async (req, res, next) => {
    try {
        const answer = await prompt(req.body.text);
        console.log('>>> answer: ', answer.trim())
        res.status(200).send({ status: 'success', answer })
    } catch (err) {
        res.status(500).send({ err: 'Could not perform prompt operation' })
    }
}

module.exports = {
    handleAudioUpload,
    handlePrompt
}
