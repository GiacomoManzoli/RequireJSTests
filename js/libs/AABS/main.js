define(function (require) {
    var oBIMServer = require('./aabs.instance');

    require('./aabs.setup');

    // Ritorna l'unica istanza dell'oggetto
    return oBIMServer;
});