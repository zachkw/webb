var express = require('express')
var router = express.Router()

var stocks = require('yahoo-finance');

router.get('/:tag', async (req, res) => {
    stocks.quote({
        symbol: req.params.tag,
        modules: [ 'price', 'summaryDetail', 'financialData', 'defaultKeyStatistics'] // see the docs for the full list
      }, function (err, quotes) {
        res.send(quotes);
    });
});

module.exports = router