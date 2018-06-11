// readable stream
const request = require('request');

const s = request('http://www.pluralsight.com//');

s.on('data', function(chunk) {
  console.log("data.. " + chunk);
});
s.on('end', function() {
  console.log("DOneee!!!");
});

// writable stream
console.log("stdout is writable? " + process.stdout.writable);

process.stdout.write("Hello");
process.stdout.write("World");
