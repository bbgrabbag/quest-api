# Quest API

## NodeJS Server for integrating with [ChatGPT](https://openai.com/api/) and Google [Voice to Text](https://cloud.google.com/speech-to-text) API.

---
[Release Notes](/changelog.md)

### Demo
>Website - http://quest-ui.surge.sh

>API Reference - https://quest-api.herokuapp.com

---

### Get Started
- `npm i`
- Create `credentials.json` file containing [google authorization credentials](https://cloud.google.com/speech-to-text/docs/before-you-begin):
 ```json
 // credentials.json
 {
    "type":"<type>",
    "project_id": "<project_id>",
    "private_key_id":"<private_key_id>",
    "private_key": "<private_key>",
    "client_email": "<client_email>",
    "client_id": "<client_id>",
    "auth_uri": "<auth_uri>",
    "token_uri":"<token_uri>",
    "auth_provider_x509_cert_url":"<auth_provider_x509_cert_url>",
    "client_x509_cert_url":"<client_x509_cert_url>"
}
```
- Create `.env` file:
```bash
echo '# create google developer account to receive credentials json file:
GOOGLE_APPLICATION_CREDENTIALS="absolute/path/to/credentials.json"

# retrieve openaicredentials at https://beta.openai.com/account/api-keys
OPEN_AI_API_KEY="<open-ai-api-key>"
OPEN_AI_ORG="<open-ai-org>"

# comma-separated list of web client urls from which to allow access and bypass CORS: 
ORIGIN_WHITELIST="http://localhost:5500,http://localhost:3000"

# port on which to run server locally:
PORT=8080' | cat > .test.env
```
- `npm run dev:watch`