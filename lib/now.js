var util = require('util');
var _ = require('lodash');
var services = require('../config/service.json');
var areas = require('../config/area.json');

var resourceUrl = "http://api.nhk.or.jp/v1/pg/now/<%= area %>/<%= service %>.json?key=<%= apikey %>";

var Base = require('./base');

function Now(apikey) {
  Base.call(this, apikey);
  this.template = _.template(resourceUrl);
}
util.inherits(Now, Base);

Now.prototype.createUrl = function(area, service) {
  var serviceId = services[service] || service;
  var areaId = areas[area] || area;
  var url = this.template({
    area : areaId,
    service : serviceId,
    apikey : this.apikey
  });
  return url;
};

module.exports = Now;
