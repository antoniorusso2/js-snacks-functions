/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function onlyStartsWith(array, char){
  // if (array !== typeof 'string'){
  //   return [''] // se l'array fornito come parametro risulta di tipo diverso da 'string' il risultato sara' un array vuoto
  // }

  const newArray = [];

  for (let i = 0; i < array.length; i++){
    //per ogni elemento dell'array in parametro controlla se la lettera inserita come parametro "char" è presente all'index 0;
    const element = array[i];
    // console.log('elementi array', element); //stampa dell'elemento in iterazione corrente

    //SE presente allora aggiunge la parola al nuovo array
    if (element.charAt(0) === char){
      newArray.push(element);
    }
    // console.log(element); 
    //ALTRIMENTI la parola viene scartata e si passa alla successiva
  }

  return newArray
}

// Invoca la funzione qui e stampa il risultato in console

const onlyStartsWithA = onlyStartsWith(names, 'A');
console.log(onlyStartsWithA)

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]