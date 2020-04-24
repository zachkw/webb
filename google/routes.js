var express = require('express')
var router = express.Router()
var service = require('./service')
  
router.get('/', (req, res) => res.send('Hello Google World!'))
  
router.get('/trends/location/:location', async (req, res) => {
  try {
    const result = await service.googleTrends(req.params.location, req.query.date);
    res.send(result);
  } 
  catch(e) {
    throw e;
  }
});

router.get('/trends/titles/location/:location', async (req, res) => {
    try {
        const result = await service.googleTrendsTitles(req.params.location, req.query.date);
        res.send(result);
    } 
    catch(e) {
        throw e;
    }
});

module.exports = router