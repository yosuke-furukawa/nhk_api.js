var NHK = require("nhk_api");
var nhk = new NHK("Ax01o1yUnUP8fTARBWP4rJ3GAY2CxoAY");

nhk.list.get("130", "g1", "tomorrow", function(err, result){
     console.log(result);
});
