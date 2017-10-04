// Ogni modulo è una funzione che prende come parametro una funzione e ne estende il prototipo
define(['require'], function (require) {
    'use strict';
    
    function extend(BS) {
        BS.prototype.loadAPI = function () {
            this.project = "Progetto1";
        };
    }
    
    return extend; // Ritorno la funzione che estende la classe.
});