define(function (require) {
    var oBIMServer = {
        project: null
    };

    // Carica i vari moduli, passandogli il riferimento all'istanza
    // i vari moduli popolano l'istanza.
    var setupInterface = require('./abs.setup')(oBIMServer);

    // Ritorna l'unica istanza dell'oggetto
    return oBIMServer;
});