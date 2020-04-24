var express = require('express')
var router = express.Router()
var service = require('./service')
  
router.get('/', (req, res) => res.send('Hello IG World!'))
  
router.get('/handle/:handle/open', async (req, res) => {
  try {
    const result = await service.handleScrape(req.params.handle);
    res.send(result);
  } 
  catch(e) {
    throw e;
  }
});

router.get('/handle/:handle/text', async (req, res) => {
  try {
    const result = await service.handleTextScrape(req.params.handle);
    res.send(result);
  }
  catch(e) {
    throw e;
  }
});

router.get('/hashtag/:hashtag/open', async (req, res) => {
  try {
    const result = await service.hashtagScrape(req.params.hashtag);
    res.send(result);
  } catch(e) {
    throw e;
  }
});



module.exports = router