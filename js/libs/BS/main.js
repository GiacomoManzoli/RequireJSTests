define(function (require) {
    'use strict';

    // Definisco la classe
    function BS(){
        this.project = null;   
    }

    // Carico nel prototipo le funzioni presenti sui vari file JS
    // All'interno delle funzioni uso `this` per accedere all'istanza
    // dell'oggetto (ad esempio per salvare il progetto)
    var setupModule = require('./bs.setup');
    BS.prototype.loadAPI = setupModule.loadAPI;

    var elementsModule = require('./bs.elements');
    BS.prototype.loadElements = elementsModule.loadElements;

    // Creo un'unica istanza della classe
    var oBIMServer = new BS();
    // Esporto la variabile
    return oBIMServer; 
});