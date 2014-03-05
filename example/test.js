var NHK = require("nhk_api");
var nhk = new NHK("5K77uQA6JQi8GGWGHjnYdE9C0pcKAiQb");

nhk.list.get("130", "g1", function(err, result){
     console.log(result);
});
