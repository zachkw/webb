const express = require('express')
const insta = require('./insta/routes')
const google = require('./google/routes')
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/insta', insta);
app.use('/google', google);

app.listen(PORT);
