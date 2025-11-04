/* Scrivi una funzione che accetti una stringa contenente un nome 
e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */




// Dichiara la funzione qui.
function saluto(name){
    let nomeCorretto = name.charAt(0).toUpperCase() + name.slice(1);
    return "Ciao, " + nomeCorretto + ", come stai"
}



//Risultato atteso se si passa 'Mario': // ciao Mario
let utente= prompt("inserisci qui il tuo nome")
console.log(saluto(utente))
