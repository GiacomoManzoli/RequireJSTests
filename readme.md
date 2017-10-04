# RequireJS

Nel file config:

- `baseUrl`: tutti gli script sono caricati a partire da questo path.
- `paths`: dizionario con i percorsi per le varie libererie. I percorsi sono relativi al `baseUrl`.

Tutti i file JavaScript devono definire un modulo che può avere delle dipendenze verso altri moduli.


## Packages (a.k.a. Multi-file module)

1. Raccolgo in una cartella tutti i file che costituiscono il package.
2. Definisco un file `main.js` che importa tutti i file del package e che esporta l'interfaccia pubblica. Il nome `main.js` permette di caricate il tutto con le configurazioni di default, altrimenti sarebbe necessario specifcarlo nel `config`
3. Dichiaro nel `config` il path al package
4. Nel codice "cliente" faccio il require del package.
5. Dentro il "facade" del package faccio i require ai componenti usando il path relativo.


## Descrizione dei file

- `index.html`: pagina principale dell'applicazione, carica RequireJS e il modulo di configurazione.
- `js/config.js`: configurazione di RequireJS, definisce i percorsi delle varie librerie/moduli. Avvia anche l'applicazione caricando il modulo `app`.
- `js/app.js`: entry point dell'applicazione (il nome del file deve coincidere col modulo caricato in `js/config.js`)
- `js/libs/lib1`: esempio di package definito su più file diversi.
- `js/libs/*BS`: prove per la composizione di un'oggetto partendo da più file diversi

## Modalità di composizione di più moduli in un'unico oggetto

Obietto: una sola istanza, metodi sparsi su più file, sintassi il più chiara possibile.

- Metodo 1 `BS`: nel `main` definisco la classe ed importo le funzioni dagli altri moduli. Le funzioni degli altri moduli usano `this` per riferirsi all'istanza. Problema: se guardo gli altri moduli c'è un `this` mollato li a caso. (`bs.setup.js`)
- Metodo 2 `ABS`: nel `main` definisco l'oggetto, nei moduli definisco i vari metodi. Non c'è il prototype, ma c'è lo stesso problema del `this` mollato a caso.
- Metodo 3 `AABS`: definisco l'istanza in un modulo a parte, nel `main` richiedo i vari moduli. Ad ogni modulo extra marco come dipendenza l'istanza. Ogni modulo popola parte dell'istanza. Non c'è il this mollato a caso, ma c'è un groviglio di dipendenze.
- Metodo 4 `DBS`: definisco nel `main` una classe. I vari moduli sono una funzione che prende come parametro la mia classe e ne estende il prototipo. Così facendo il `this` non è mollato a caso, ma perdo la definzione dell'API in un singolo posto.