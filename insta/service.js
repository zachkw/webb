var ig = require('instagram-scraping');

exports.handleScrape = async(handle) => {
  let res = await ig.scrapeUserPage(handle);
  return res;
}

exports.handleTextScrape = async(handle) => {
  let res = await ig.scrapeUserPage(handle);  
  const mappedText = res.medias.map((instagramObject) => instagramObject.text);
  return mappedText;
}

exports.hashtagScrape = async(name) => {
  let res = await ig.scrapeTag(name);
  return res;
}

exports.location = async(name) => {
  let res = await ig.scrapeLocation(123);
  return res;
}
