define(function (require) {
    console.log("Richiedo il modulo 'values'");
    var values = require('values'); 
    console.log("Richiedo il modulo 'f' (usando il path impostato in config.js)");    
    var f = require('f');
    console.log("Richiedo il modulo 'g' (usando il path impostato in config.js)");
    var g = require('g');

    console.log("Uso le funzioni importate...");
    f();
    g();

    console.log("Richiedo il package 'lib1'");
    var lib1 = require('lib1');
    console.log("Uso la funzione 'l1' del package");
    lib1.l1();

    console.log("-------------------");
    console.log("Cose più divertenti");
    console.log("-------------------");
    // Metodo 1: compongo la classe usando un package ed esporto l'unica istanza.
    var oBIMServer = require('BS'); // Recupero l'istanza del BS
    console.log(oBIMServer);
    oBIMServer.loadAPI();
    oBIMServer.loadElements();
    console.log(oBIMServer);


    console.log("--------------------------");
    console.log("Cose ancora più divertenti");
    console.log("--------------------------");
    // Metodo 2: compongo l'oggetto passando l'istanza come parametro alle varie funzioni
    var oABIMServer = require('ABS'); // Recupero l'istanza del BS
    console.log(oABIMServer);
    oABIMServer.loadAPI();
    console.log(oABIMServer);

    console.log("-------------------------------");
    console.log("Cose ancora (x2) più divertenti");
    console.log("-------------------------------");
    // Metodo 3: unica istanza dell'oggeto da cui dipendono i vari moduli parziali.
    var oAABIMServer = require('AABS'); // Recupero l'istanza del BS
    console.log(oAABIMServer);
    oAABIMServer.loadAPI();
    console.log(oAABIMServer);

    console.log("-------------------------------");
    console.log("Ok, potrei averci preso gusto");
    console.log("-------------------------------");
    // Metodo 3: unica istanza dell'oggeto da cui dipendono i vari moduli parziali.
    var oDBIMServer = require('DBS'); // Recupero l'istanza del BS
    console.log(oDBIMServer);
    oDBIMServer.loadAPI();
    console.log(oDBIMServer);
});
