var util = require('util');
var _ = require('lodash');
var moment = require('moment');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/genre/<%= area %>/<%= service %>/<%= genre %>/<%= date %>.json?key=<%= apikey %>";

var Base = require('./base');

function Genre(apikey) {
  Base.call(this, apikey);
  this.template = _.template(resourceUrl);
}
util.inherits(Genre, Base);

Genre.prototype.createUrl = function(area, service, genre, date) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var dateId = date || "today";
  dateId = _.isFunction(dateId) ? "today" : dateId;
  dateId = dateId === "today" ? moment().format("YYYY-MM-DD") : dateId;
  if (dateId === "tomorrow") {
    var dayOfMonth = moment().date();
    dateId = moment().date(dayOfMonth + 1).format("YYYY-MM-DD");
  }
  var url = this.template({
    area : areaId,
    service : serviceId,
    genre : genre,
    date : dateId,
    apikey : this.apikey
  });
  return url;
};

module.exports = Genre;
