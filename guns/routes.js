var express = require('express')
var router = express.Router()
const csv=require('csvtojson')
var path = require('path');

router.get('/deaths', async (req, res) => {
    const result=await csv().fromFile(path.join(__dirname, 'gun_death_total.csv'));
    res.send(result);
});
 

module.exports = router;
