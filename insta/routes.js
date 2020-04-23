var express = require('express')
var router = express.Router()
var service = require('./service')
  
router.get('/', (req, res) => res.send('Hello IG World!'))
  
router.get('/ig/:ig', async (req, res) => {
  try {
    const result = await service.igScrape(req.params.ig);
    res.send(result);
  }
  catch(e) {
    next(e);
  }
});

module.exports = router