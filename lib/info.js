var util = require('util');
var _ = require('lodash');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/info/<%= area %>/<%= service %>/<%= id %>.json?key=<%= apikey %>";

var Base = require('./base');

function Info(apikey) {
  Base.call(this, apikey);
  this.template = _.template(resourceUrl);
}
util.inherits(Info, Base);

Info.prototype.createUrl = function(area, service, id) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var url = this.template({
    area : areaId,
    service : serviceId,
    id : id,
    apikey : this.apikey
  });
  return url;
};

module.exports = Info;

