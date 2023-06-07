const express = require('express');
const request = require('request');
const cors = require('cors');
const querystring = require('querystring');
const cookieParser = require('cookie-parser');
const read_secret = require('../tools/secret_reader');
const CLIENT_SECRET = read_secret('spotify_client_secret');
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URI = process.env.REDIRECT_URI;
const PORT = process.env.PORT || 4321

const app = express();

app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});
