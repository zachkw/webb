var ig = require('instagram-scraping');

const handleScrape = async(handle) => {
  let res = await ig.scrapeUserPage(handle);
  return res;
}

const handleTextScrape = async(handle) => {
  let res = await ig.scrapeUserPage(handle);  
  const mappedText = res.medias.map((instagramObject) => instagramObject.text);
  return mappedText;
}

const hashtagScrape = async(name) => {
  let res = await ig.scrapeTag(name);
  return res;
}

const location = async(name) => {
  let res = await ig.scrapeLocation(123);
  return res;
}


exports.handleTextScrape = handleTextScrape;
exports.handleScrape = handleScrape;
exports.hashtagScrape = hashtagScrape;

