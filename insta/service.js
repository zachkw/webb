var ig = require('instagram-scraping');
var rwDenseCap = require('../runwayML/densecap');

exports.handleScrape = async(handle) => {
  let res = await ig.scrapeUserPage(handle);
  return res;
}

exports.handleTextScrape = async(handle) => {
  let res = await ig.scrapeUserPage(handle);  
  const mappedText = res.medias.map(instagramObject => instagramObject.text);
  return mappedText;
}

exports.handleFollowersScrape = async(handle) => {
  try {
    let res = await ig.scrapeUserPage(handle);  
    return res.user.edge_followed_by.count;
  } catch(e) {
    return 0;
  }
}

exports.hashtagScrape = async(name) => {
  let res = await ig.scrapeTag(name);
  return res;
}

exports.location = async(name) => {
  let res = await ig.scrapeLocation(123);
  return res;
}

exports.denseCapScrape = async(name) => {
  let igRes = await ig.scrapeUserPage(name);  
  const profilePictureUrl = igRes.user.profile_pic_url;

  const mappedImageUrls = igRes.medias.map(instagramObject => instagramObject.display_url);
  mappedImageUrls.unshift(profilePictureUrl);

  let res = await rwDenseCap.runInstagramImage(profilePictureUrl); 
  return res;
}
