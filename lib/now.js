var util = require('util');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/now/";

var Base = require('./base');

function Now(apikey) {
  Base.call(this, apikey);
}
util.inherits(Now, Base);

Now.prototype.createUrl = function(area, service) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var url = resourceUrl + area + "/" + service + ".json?key=" + this.apikey;
  return url;
};

module.exports = Now;
