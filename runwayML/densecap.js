require('es6-promise').polyfill();
require('isomorphic-fetch');
const imageToBase64 = require('image-to-base64');

exports.runInstagramImage = async(imageLink) => {
    return await imageToBase64(imageLink)
        .then(async(image64) => {
            let output = await runDenseCap(image64);
            return output;
    });
}

exports.runInstagramImages = async(imageLinks, amount) => {
    var result = [];
    for(i = 0; i < amount; i++) {
        let text = await imageToBase64(imageLinks[i])
        .then(async (image64) => {
            let output = await runDenseCap(image64);
            return output;
        }); 
        result.push(text);  
    }
    return result;
}

const runDenseCap = async(image64) => {

    const inputs = {
        "image": image64,
        "max_detections": 10,
    };

    return fetch("https://allthenames.hosted-models.runwayml.cloud/v1/query", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer /2hziOAM/gt7RLvJXKbUWg==",
            "Content-Type": "application/json",
        },
    body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(outputs => {
        const { boxes, classes, scores } = outputs;
        return outputs.classes;
    });
}