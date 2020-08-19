const lineReader = require('line-reader');
fs = require('fs');

lineReader.eachLine('./input.txt', function(line) {
    fs.appendFile('./output.txt', eval(line).toString() + '\n', () => {})
});