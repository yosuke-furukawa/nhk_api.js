var NHK = require('../index');
var test = require('tape');

// this apikey for test
var apikey = "5K77uQA6JQi8GGWGHjnYdE9C0pcKAiQb";


test(' has instance ', function (t) {
  var nhk = new NHK(apikey);
  var List = require('../lib/list');
  var Genre = require('../lib/genre');
  var Info = require('../lib/info');
  var Now = require('../lib/now');
  t.ok(nhk.list instanceof List, " nhk.list is List instance");
  t.ok(nhk.genre instanceof Genre, " nhk.genre is Genre instance");
  t.ok(nhk.info instanceof Info, " nhk.info is Info instance");
  t.ok(nhk.now instanceof Now, " nhk.now is Now instance");
  t.end();
});
