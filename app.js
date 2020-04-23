const express = require('express')
const insta = require('./insta/routes')

// ...

const app = express()
const port = process.env.PORT

app.use('/insta', insta)
