var Base = require('../lib/base');
var test = require('tape');
test(' format time 2014-03-05', function (t) {
  var base = new Base();
  var now = new Date();
  now.setUTCFullYear(2014);
  now.setUTCMonth(3 - 1);
  now.setUTCDate(5);
  now.setUTCHours(0);

  base._jpnize(now);
  var date = base._formatDate(now);
  t.equal(date, "2014-03-05", date);
  t.end();
});

test(' format time 2014-03-06', function (t) {
  var base = new Base();
  var now = new Date();
  now.setUTCFullYear(2014);
  now.setUTCMonth(3 - 1);
  now.setUTCDate(5);
  now.setUTCHours(22);

  base._jpnize(now);
  var date = base._formatDate(now);
  t.equal(date, "2014-03-06", date);
  t.end();
});
