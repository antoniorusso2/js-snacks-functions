/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetterArray(array){
  let firstLetters = [];

  for (let i = 0; i < array.length; i++){

    let name = array[i]; //return string
    // console.log(name)

    firstLetters.push(name.charAt(0)); //return stringa con la prima lettera e la pusha nell'array all'interno della funzione;
    // console.log(firstLetters)
  }
  return firstLetters // la funzione ritorna un array con all'interno le lettere pushate dell'array inserito come parametro;
}

// Invoca la funzione qui e stampa il risultato in console
const result = firstLetterArray(names); //ritorna un array dato dalla funzione
console.log(result);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]