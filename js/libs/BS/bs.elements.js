define(function(require){
    var loadElements = function () {
        console.log("loadElement", this);
    };

    return {
        loadElements: loadElements
    };
});