/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array 
con le iniziali di ogni parola dell'array fornito */




// Dichiara la funzione qui.
function NewArray(names){
    let risultato = [];
    for (let i = 0; i < names.length; i++) {
        risultato.push(names[i][0].toUpperCase());
}
 return risultato
}

// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(NewArray(names));



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]