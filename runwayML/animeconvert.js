require('es6-promise').polyfill();
require('isomorphic-fetch');
const imageToBase64 = require('image-to-base64');

exports.runInstagramImage = async(imageLink) => {
    return await imageToBase64(imageLink)
        .then(async(image64) => {
            let output = await runAnimeConvert(image64);
            return output;
    });
}

exports.runInstagramImages = async(imageLinks, amount) => {
    var result = [];
    for(i = 0; i < amount; i++) {
        let text = await imageToBase64(imageLinks[i])
        .then(async (image64) => {
            let output = await runAnimeConvert(image64);
            return output;
        }); 
        result.push(text);  
    }
    return result;
}

const runAnimeConvert = async(image64) => {

    const inputs = {
        "image": image64,
    };

    return fetch("https://webb-anime.hosted-models.runwayml.cloud/v1/query", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Authorization": "Bearer QSN7a4IXIbAxCXL8vgbeuA==",
          "Content-Type": "application/json",
        },
    body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(outputs => {
        const { boxes, classes, scores } = outputs;
        return outputs;
    });
}