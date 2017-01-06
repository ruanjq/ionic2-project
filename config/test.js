/*const fs = require('fs');
const path = require('path');
console.log(fs);
fs.unlinkSync(path.resolve(__dirname,"../cordovaApp/www"));
// fs.mkdirSync(path.resolve(__dirname,"../cordovaApp/www"));*/
const path = require('path');
require('shelljs/global');
rm('-rf', path.resolve(__dirname,"../cordovaApp/www"));
mkdir('-p', path.resolve(__dirname,"../cordovaApp/www"));