var ig = require('instagram-scraping');


const igScrape = async(igTag) => {
  let res = await ig.scrapeUserPage(igTag);  
  const mappedText = res.medias.map((instagramObject) => instagramObject.text);
  return mappedText;
}

exports.igScrape = igScrape;

