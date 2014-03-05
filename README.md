NHK API for javascript [![Build Status](https://travis-ci.org/yosuke-furukawa/nhk_api.js.png?branch=master)](https://travis-ci.org/yosuke-furukawa/nhk_api.js)
=====================

NHK has their televison program API.

This library can call the API from javascript

See more detail here:

[NHK番組表API](http://api-portal.nhk.or.jp/ja)


Usage
=====================

```javascript

var NHK = require("nhk_api");
var nhk = new NHK("YOUR_API_KEY");
var callback = function(err, result) {
  console.log(JSON.stringify(result));
};

// list api
nhk.list.get("130", "g1", callback);
nhk.list.get("東京", "NHK総合1", callback);
nhk.list.get("東京", "NHK総合1", "tomorrow", callback);
// genre api
nhk.genre.get("130", "g1", callback);
nhk.genre.get("東京", "NHK総合1", callback);
nhk.genre.get("東京", "NHK総合1", "tomorrow", callback);
// info api
nhk.info.get("130", "g1", "123456789", callback);
// now api
nhk.now.get("130", "g1", callback);
```

Install
======================

for server

```shell
$ npm install nhk_api
```

for client

```shell
$ bower install nhk_api
```
