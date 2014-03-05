var util = require('util');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/list/";

var Base = require('./base');

function List(apikey) {
  Base.call(this, apikey);
}
util.inherits(List, Base);

List.prototype.createUrl = function(area, service, date) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var dateId = date || "today";
  dateId = this.isFunction(dateId) ? "today" : dateId;
  dateId = dateId === "today" ? this.today() : dateId;
  dateId = dateId === "tomorrow" ? this.tomorrow() : dateId;
  var url = resourceUrl + areaId + "/" + serviceId + "/" + dateId + ".json?key=" + this.apikey;
  return url;
};

module.exports = List;
