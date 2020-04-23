const express = require('express')
const insta = require('./insta/routes')

// ...

const app = express()
const port = 3000

app.use('/insta', insta)
