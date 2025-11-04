/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali 
contenute al suo interno */


// Dichiara la funzione qui.
function Vocali (str){
    str =str.toLowerCase()
    const vocali = "aeiou";//creiamo la variabile vocali
    let count = 0;//questa e la variabile dove terremo il conto
    let VocaliTrovate = [];

    for (let i = 0; i <str.length; i++){
        let char = str[i];
        
        for(let j= 0; j <vocali.length; j++){
            if(char === vocali[j]){
                count ++ ;
            VocaliTrovate += char;
            break;
            }
        }
    }
        console.log(VocaliTrovate)
        return count
}



// Invoca la funzione qui e stampa il risultato in console
const utente = prompt("Inserisci una scritta ed estrapolo le vocali")
let numeroVocali = Vocali(utente)
console.log(numeroVocali)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

