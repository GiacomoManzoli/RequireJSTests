requirejs.config({
    baseUrl: './js',
    paths: {
        'f': 'libs/f/f', // Path al file JavaScript senza estensione (è implicita)
        'g': 'libs/g/g',
        'lib1': 'libs/lib1', // Da notare che 'lib1' è un package e mi basta passargli il path alla cartella. Sa lui che deve prendersi il main.js.
        'values': 'libs/values/values',
        'BS': 'libs/BS',
        'ABS': 'libs/ABS',
        'AABS': 'libs/AABS',
        'DBS': 'libs/DBS'
    },
    packages: ["lib1", "BS", "ABS", "AABS", "DBS"] // Ci sarebbero altre opzioni per specificare un file diverso da 'main.js' come file principale.
});

// Richiedo il modulo principale (avvio l'applicazione)
requirejs(['app']);