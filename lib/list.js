var util = require('util');
var _ = require('lodash');
var moment = require('moment');
var services = require('../config/service.json'); 
var areas = require('../config/area.json'); 
var resourceUrl = "http://api.nhk.or.jp/v1/pg/list/<%= area %>/<%= service %>/<%= date %>.json?key=<%= apikey %>";
var Base = require('./base');

function List(apikey) {
  Base.call(this, apikey);
  this.template = _.template(resourceUrl);
}
util.inherits(List, Base);

List.prototype.createUrl = function(area, service, date) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var dateId = _.isFunction(date) ? moment().format("YYYY-MM-DD") : date;
  var url = this.template({
    area : areaId,
    service : serviceId,
    date : dateId,
    apikey : this.apikey
  });
  console.log(url);
  return url;
};
module.exports = List;
