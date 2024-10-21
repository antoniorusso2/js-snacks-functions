/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

//! Dichiara la funzione qui.

//funzione per controllo se una lettera è una vocale
// function isVowel(word){
  

//   for(let i = 0; i < word.length; i++){
//     const letter = word.charAt(i); //singola lettera presa dalla stringa fornita come parametro
//     if (vowels)
//   }
// }
function onlyVowels(string) {

  //?validazione stringa come parametro fornito
  // if(string !== typeof string){
  //   return ''
  // }

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let wordVowels = '';

  for(let i = 0; i < string.length; i++) {

    const letter = string.charAt(i);

    //agiunta di un carattere alla nuoava stringa
    if(vowels.includes(letter)){
      wordVowels += letter;
    }

  }
  console.log(wordVowels)
  return wordVowels.length
}

// Invoca la funzione qui e stampa il risultato in console
const allVowels = onlyVowels(word);
console.log(allVowels);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)