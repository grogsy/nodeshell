const fs = require('fs');
const { pwd } = require('./pwd');


module.exports.cat = function cat (fileName) {
    fs.readFile(`${pwd()}/${fileName}`, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(data);
    })
}