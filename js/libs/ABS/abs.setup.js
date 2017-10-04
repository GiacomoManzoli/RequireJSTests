define(function(require) {

    // Problema: c'è ancora un this mollato li a caso.
    var _loadAPI = function () {
        this.project = "Progetto1";
    };

    // Funzione che inizializza parte dell'oggetto
    return function(oBIMServer){
        oBIMServer.loadAPI = _loadAPI;
    };
});