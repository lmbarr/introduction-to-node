const request = require('request');
const fs = require('fs');
const s = request('http://www.pluralsight.com//');
// piping into the console
s.pipe(process.stdout);
// piping into a file
s.pipe(fs.createWriteStream('pluralsight.html'));
