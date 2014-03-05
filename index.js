var List = require('./lib/list');
var Genre = require('./lib/genre');
var Info = require('./lib/info');
var Now = require('./lib/now');

function NHK(apikey) {
    this.list = new List(apikey);
    this.genre = new Genre(apikey);
    this.info = new Info(apikey);
    this.now = new Now(apikey);
}

module.exports = NHK;
