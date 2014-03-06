var http = require('http');
var url = require('url');

var Base = function(apikey) {
  this.apikey = apikey;
};

Base.prototype.isFunction = function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
};

// NHK is japanese television program
Base.prototype._jpnize = function(now) {
  now.setHours((now.getUTCHours() + 9)%24);
}

Base.prototype._formatDate = function(now) {
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;
  return year + "-" + month + "-" + date;
};

Base.prototype.today = function() {
  var now = new Date();
  this._jpnize(now);
  return this._formatDate(now);
};

Base.prototype.tomorrow = function() {
  var now = new Date();
  this._jpnize(now);
  now.setDate(now.getDate() + 1);
  return this._formatDate(now);
};

Base.prototype.get = function() {
  var nhkUrl = this.createUrl.apply(this, arguments);
  var params = url.parse(nhkUrl);
  params.withCredentials = false;
  var cb = arguments[arguments.length - 1];
  http.get(params, function(res) {
    var data = '';
    res.on("data", function(chunk) {
      data += chunk;
    });
    res.on("end", function() {
      try {
        cb(null, JSON.parse(data));
      } catch (e) {
        console.error(data);
        console.error(e);
        cb(e);
      }
    });
  }).on('error', function(e) {
    cb(e);
  });
};

module.exports = Base;
