/* Scrivi una funzione che accetti un'array di stringhe e una lettera
 e restituisca un array contenente solo le parole che iniziano con quella lettera */




// Dichiara la funzione qui.
function Selezionenome(names, lettera){
    //array vuoto
    let risultato = [];
    //inizio ciclo for
    for (let i = 0; i < names.length; i++){
        const parola = names[i];
        if(parola[0].toUpperCase()===lettera.toUpperCase()){//controlliamo la prima lettera di ogni parola[0]
            risultato.push(parola);// se la parola coincide allora aggiunge parola nell'array vuoto sopra creato
        }
    }
    return risultato //restituisce l'array ma filtrato

}

// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const lettera = "A"
console.log(Selezionenome(names, lettera));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]