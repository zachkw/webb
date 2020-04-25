const express = require('express')
const insta = require('./insta/routes')
const google = require('./google/routes')

const app = express()
const PORT = process.env.PORT || 3000;

app.use('/insta', insta);
app.use('/google', google);

app.use((req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
});


app.listen(PORT);
