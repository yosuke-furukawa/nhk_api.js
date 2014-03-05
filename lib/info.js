var util = require('util');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/info/";

var Base = require('./base');

function Info(apikey) {
  Base.call(this, apikey);
}
util.inherits(Info, Base);

Info.prototype.createUrl = function(area, service, id) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var url = resourceUrl + areaId + "/" + serviceId + "/" + id + ".json?key=" + this.apikey;
  return url;
};

module.exports = Info;

