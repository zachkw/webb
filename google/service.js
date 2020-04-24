const googleTrends = require('google-trends-api');

exports.googleTrends = async(location, date) => {
    let res = await googleTrends.dailyTrends({
        trendDate: new Date(date),
        geo: location,
      });
    return res;
  }
  