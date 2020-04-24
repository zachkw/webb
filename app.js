const express = require('express')
const insta = require('./insta/routes')
const google = require('./google/routes')

const app = express()
const PORT = process.env.PORT || 3000;

app.use('/insta', insta);

app.listen(PORT);
