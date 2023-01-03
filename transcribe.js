const speechAPI = require('@google-cloud/speech');

const client = new speechAPI.SpeechClient();

const transcribeAudio = async (base64EncodedAudioFile) => {
    const config = {
        encoding: process.env.ENCODING,
        sampleRateHertz: process.env.SAMPLE_RATE,
        languageCode: 'en-US',
    };

    const audio = {
        content: base64EncodedAudioFile,
    };

    const request = {
        config: config,
        audio: audio,
    };
    const [operation] = await client.longRunningRecognize(request);
    const [response] = await operation.promise();
    return response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');
}

module.exports = {
    transcribeAudio
}