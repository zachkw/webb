const express = require('express')
const insta = require('./insta/routes')
const google = require('./google/routes')

const app = express()
const PORT = process.env.PORT || 3000;

app.use('/insta', insta);
app.use('/google', google);

const options = { headers: { 'content-type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*" } };


app.listen(PORT);
