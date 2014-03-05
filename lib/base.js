var http = require('http');

var Base = function(apikey) {
  this.apikey = apikey;
};

Base.prototype.get = function() {
  var url = this.createUrl.apply(this, arguments);
  var cb = arguments[arguments.length - 1];
  http.get(url, function(res) {
    var data = '';
    res.on("data", function(chunk) {
      data += chunk;
    });
    res.on("end", function() {
      try {
        cb(null, JSON.parse(data));
      } catch (e) {
        cb(e);
      }
    });
  }).on('error', function(e) {
    cb(e);
  });
};

module.exports = Base;
