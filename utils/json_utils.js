function tryParseJSON (jsonString){
    try {
        const obj = JSON.parse(jsonString);

        if (obj && typeof obj === "object") {
            return obj;
        }
    }
    catch (err) { 
        console.log(err)
    }
    return null;
}

function encodeJSON (obj) {
    obj = JSON.stringify(obj);
    return encodeURI(obj);
};
// doesn't work directly on the handlebars script tag
function decodeJSON (obj) {
    obj = decodeURI(obj);
    console.log(obj);
    return tryParseJSON(obj);
};

module.exports = { tryParseJSON, encodeJSON, decodeJSON }
