define(function (require) {
    'use strict';

    // Definisco la classe
    function BS(){
        this.project = null;   
    }

    // Ogni modulo è una funzione che mi estende il prototipo.
    var setupInterface = require('./dbs.setup');
    setupInterface(BS);

    // Creo un'unica istanza della classe
    var oBIMServer = new BS();
    // Esporto la variabile
    return oBIMServer; 
});