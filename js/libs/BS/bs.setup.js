define(function (require) {

    // Non è bello, c'è un this mollato a caso
    var loadAPI = function () {
        this.project = "Progetto1";
    };

    return {
        loadAPI: loadAPI
    };
});