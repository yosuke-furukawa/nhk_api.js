var util = require('util');
var _ = require('lodash');
var resourceUrl = "http://api.nhk.or.jp/v1/pg/genre/<%= area %>/<%= service %>/<%= genre %>/<%= date %>.json?key=<%= apikey %>";
var Base = require('./base');

var Genre = function(apikey) {
  Base.call(this, apikey);
  this.template = _.template(resourceUrl);
};
util.inherits(Genre, Base);

Genre.prototype.createUrl = function(area, service, genre, date) {
  var serviceId = services[service] || service;
  var areaId = areas[area] area;
  var url = template.compile({
    area : areaId,
    service : serviceId,
    genre : genre,
    date : date,
    apikey : this.apikey
  });
  return url;
};
module.exports = Genre;
