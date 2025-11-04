/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */


// Dichiara la funzione qui.
function Vocali (str){
    const vocali = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i <str.length; i++){
        if (vocali.includes(str[i])){
            count++
        }
    }
   return count;

}


// Invoca la funzione qui e stampa il risultato in console
const utente = prompt("Inserisci una scritta ed estrapolo le vocali")
console.log(Vocali(utente))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)