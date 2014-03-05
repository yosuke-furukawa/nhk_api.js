var NHK = require('../index');
var test = require('tape');

// this apikey for test
var apikey = "5K77uQA6JQi8GGWGHjnYdE9C0pcKAiQb";


test(' now url ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.now.createUrl("130", "g1");
  var expected = "http://api.nhk.or.jp/v1/pg/now/130/g1.json?key=" + apikey;
  t.equal(url, expected, "url is same");
  t.end();
});

test(' get now url ', function (t) {
  var nhk = new NHK(apikey);
  nhk.now.get("130", "g1", function(err, msg) {
    t.notOk(err, "error is not found");
    t.ok(msg, "msg is truthy");
    t.ok(msg.nowonair_list, "msg.nowonair is truthy");
    t.ok(msg.nowonair_list.g1, "msg.nowonair.g1 is truthy");
    t.end();
  });
});




