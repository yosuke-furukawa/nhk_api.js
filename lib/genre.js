var util = require('util');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/genre/";

var Base = require('./base');

function Genre(apikey) {
  Base.call(this, apikey);
}
util.inherits(Genre, Base);

Genre.prototype.createUrl = function(area, service, genre, date) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var dateId = date || "today";
  dateId = this.isFunction(dateId) ? "today" : dateId;
  dateId = dateId === "today" ? this.today() : dateId;
  dateId = dateId === "tomorrow" ? this.tomorrow() : dateId;
  var url = resourceUrl + areaId + "/" + serviceId + "/" + genre + "/" + dateId + ".json?key=" + this.apikey;
  return url;
};

module.exports = Genre;
