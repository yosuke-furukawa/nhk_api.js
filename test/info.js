var NHK = require('../index');
var test = require('tape');

// this apikey for test
var apikey = process.env.NHK_API_KEY || require('../config/test.json').apikey;


test(' info url ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.info.createUrl("130", "g1", "1234567");
  var expected = "http://api.nhk.or.jp/v1/pg/info/130/g1/1234567.json?key=" + apikey;
  t.equal(url, expected, "url is same");
  t.end();
});

test(' get info url ', function (t) {
  var nhk = new NHK(apikey);
  nhk.list.get("130", "g1", function(err, result) {
    nhk.info.get("130", "g1", result.list.g1[0].id, function(err, msg){
      t.notOk(err, "error is not found");
      t.ok(msg, "msg is truthy");
      t.ok(msg.list, "msg.list is truthy");
      t.ok(msg.list.g1, "msg.list.g1 is truthy");
      t.end();
    });
  });
});



