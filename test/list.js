var NHK = require('../index');
var test = require('tape');
var moment = require('moment-timezone');

// this apikey for test
var apikey = process.env.NHK_API_KEY || require('../config/test.json').apikey;


test(' list url ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.list.createUrl("130", "g1");
  var date = moment().tz("Asia/Tokyo").format("YYYY-MM-DD");
  var expected = "http://api.nhk.or.jp/v1/pg/list/130/g1/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is same");
  t.end();
});

test(' list url to specify keyword ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.list.createUrl("東京", "NHK総合1");
  var date = moment().tz("Asia/Tokyo").format("YYYY-MM-DD");
  var expected = "http://api.nhk.or.jp/v1/pg/list/130/g1/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is same");
  t.end();
});

test(' list url today ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.list.createUrl("東京", "NHK総合1", "today");
  var date = moment().tz("Asia/Tokyo").format("YYYY-MM-DD");
  var expected = "http://api.nhk.or.jp/v1/pg/list/130/g1/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is today");
  t.end();
});

test(' list url tomorrow ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.list.createUrl("東京", "NHK総合1", "tomorrow");
  var dayOfMonth = moment().tz("Asia/Tokyo").date();
  var date = moment().tz("Asia/Tokyo").date(dayOfMonth + 1).format("YYYY-MM-DD");

  var expected = "http://api.nhk.or.jp/v1/pg/list/130/g1/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is tomorrow");
  t.end();
});

test(' get url ', function (t) {
  var nhk = new NHK(apikey);
  nhk.list.get("130", "g1", function(err, msg){
    t.notOk(err, "error is not found");
    t.ok(msg, "msg is truthy");
    t.ok(msg.list, "msg.list is truthy");
    t.ok(msg.list.g1, "msg.list.g1 is truthy");
    t.end();
  });
});

