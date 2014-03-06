var NHK = require('../index');
var test = require('tape');
var moment = require('moment-timezone');

// this apikey for test
var apikey = process.env.NHK_API_KEY || require('../config/test.json').apikey;


test(' genre url ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.genre.createUrl("130", "g1", "0000");
  var date = moment().tz("Asia/Tokyo").format("YYYY-MM-DD");
  var expected = "http://api.nhk.or.jp/v1/pg/genre/130/g1/0000/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is same");
  t.end();
});

test(' genre url to specify keyword ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.genre.createUrl("東京", "NHK総合1", "0000");
  var date = moment().tz("Asia/Tokyo").format("YYYY-MM-DD");
  var expected = "http://api.nhk.or.jp/v1/pg/genre/130/g1/0000/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is same");
  t.end();
});

test(' genre url today ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.genre.createUrl("東京", "NHK総合1", "0000", "today");
  var date = moment().tz("Asia/Tokyo").format("YYYY-MM-DD");
  var expected = "http://api.nhk.or.jp/v1/pg/genre/130/g1/0000/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is today");
  t.end();
});

test(' genre url tomorrow ', function (t) {
  var nhk = new NHK(apikey);
  var url = nhk.genre.createUrl("東京", "NHK総合1", "0000", "tomorrow");
  var dayOfMonth = moment().tz("Asia/Tokyo").date();
  var date = moment().tz("Asia/Tokyo").date(dayOfMonth + 1).format("YYYY-MM-DD");

  var expected = "http://api.nhk.or.jp/v1/pg/genre/130/g1/0000/" + date + ".json?key=" + apikey;
  t.equal(url, expected, "url is tomorrow");
  t.end();
});

test(' get genre url ', function (t) {
  var nhk = new NHK(apikey);
  nhk.genre.get("130", "g1", "0000", function(err, msg){
    t.notOk(err, "error is not found");
    t.ok(msg, "msg is truthy");
    t.ok(msg.list, "msg.list is truthy");
    t.ok(msg.list.g1, "msg.list.g1 is truthy");
    t.end();
  });
});


