var express = require('express')
var router = express.Router()
var service = require('./service')
const request = require('request')
const fixieRequest = request.defaults({'proxy': process.env.FIXIE_URL});

router.get('/', (req, res) => res.send('Hello IG World!'))
  
fixieRequest.get('/handle/:handle/open', async (req, res) => {
  try {
    const result = await service.handleScrape(req.params.handle);
    res.send(result);
  } 
  catch(e) {
    res.send();
  }
});

fixieRequest.get('/handle/:handle/text', async (req, res) => {
  try {
    const result = await service.handleTextScrape(req.params.handle);
    res.send(result);
  }
  catch(e) {
    res.send();
  }
});


fixieRequest.get('/handle/:handle/follower_count', async (req, res) => {
  try {
    const result = await service.handleFollowersScrape(req.params.handle);
    res.send(JSON.stringify(result));
  } 
  catch(e) {
    throw e;
  }
});


fixieRequest.get('/hashtag/:hashtag/open', async (req, res) => {
  try {
    const result = await service.hashtagScrape(req.params.hashtag);
    res.send(result);
  } 
  catch(e) {
    res.send();
  }
});

fixieRequest.get('/densecap/:handle/profile', async (req, res) => {
  try {
    const result = await service.denseCapProfile(req.params.handle);
    res.send(result);
  } 
  catch(e) {
    res.send();
  }
});


fixieRequest.get('/densecap/:handle/medias/:amount', async (req, res) => {
  try {
    const result = await service.denseCapMedias(req.params.handle, req.params.amount);
    res.send(result);
  }
  catch(e) {
    res.send();
  }
})

fixieRequest.get('/anime/:handle/profile', async (req, res) => {
  try {
    const result = await service.animeConvertProfile(req.params.handle, req.params.amount);
    res.send(result);
  } catch(e) {
    res.send();
  }
})

fixieRequest.get('/anime/:handle/medias/:amount', async (req, res) => {
  try {
    const result = await service.animeConvertMedias(req.params.handle, req.params.amount);
    res.send(result);
  } catch(e) {
    res.send();
  }
})

module.exports = router