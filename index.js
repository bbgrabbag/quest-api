const dotenv = require('dotenv');
dotenv.config();

const { server } = require('./server');

server.listen(8080, () => {
    console.log('Mic test server running...')
})