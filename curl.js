const request = require('request');

module.exports.curl = function curl (website) {
    const curly = request(website);
    console.log(curly);
}