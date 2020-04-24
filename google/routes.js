var express = require('express')
var router = express.Router()
var service = require('./service')
  
router.get('/', (req, res) => res.send('Hello Google World!'))
  
router.get('/trends', async (req, res) => {
  try {
    const result = await service.googleTrends();
    res.send(result);
  } 
  catch(e) {
    throw e;
  }
});