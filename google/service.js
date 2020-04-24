const googleTrends = require('google-trends-api');

exports.googleTrends = async() => {
    let res = await googleTrends.dailyTrends({
        trendDate: new Date('2019-01-10'),
        geo: 'US',
      });
    return res;
  }
  