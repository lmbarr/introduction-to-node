const EventEmitter = require('events').EventEmitter;

// Publishing part  
const getResource = function(c) {
  const e = new EventEmitter();
  process.nextTick(function() {
    let count = 0;
    e.emit('start');
    const t = setInterval(function() {
      e.emit('data', ++count);
      if (count === c) {
        e.emit('end', count);
        clearInterval(t);
      }
    }, 10);
  });
  return e;
};

var r = getResource(5);

// Subscribing part
r.on('start', function() {
  console.log("I've started!");
});

r.on('data', function(d) {
  console.log(" I received data >>> ", d);
});

r.on('end', function(t) {
  console.log("I'm done, with " + t + " data events.");
});
