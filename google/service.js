const googleTrends = require('google-trends-api');

exports.googleTrends = async(location, date) => {
    let res = await googleTrends.dailyTrends({
        trendDate: new Date(date),
        geo: location,
      });
    return res;
  }

exports.googleTrendsTitles = async(location, date) => {
    let res = await googleTrends.dailyTrends({
        trendDate: new Date(date),
        geo: location,
    });
    const resJson = JSON.parse(res);
    const trendingSearchesDays = resJson.default.trendingSearchesDays;
    const firstTitle = trendingSearchesDays[0];
    const mappedTitles = firstTitle.trendingSearches.map(googleFeed => googleFeed.title.query);
    return mappedTitles;
}

exports.googleRealtimeTrends = async(location) => {
    let res = await googleTrends.realTimeTrends({
        geo: location,
        category: 'h',
    });
    const resJson = JSON.parse(res);
    const trendingStories = resJson.storySummaries.trendingStories.map(stories => stories.articles.map(articles => articles.articleTitle));
    return trendingStories;
}
  