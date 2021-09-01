//palindroma

let parola = prompt("inserisci una parola");
let parolaPali = invertiParola(parola);

if(parola == parolaPali){
    console.log('è PALINDROMA');
  } else {
    console.log('non è palindroma');
  }
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  //split trasforma una stringa in un array separandola
                                                      //reverse inverrte l'ordine degli elementi dell'array
                                                      //join trasforma un array in una stringa unendola
  return strInversa;
}

//pari e dispari

let pariODispari = prompt("Inserisci -pari- o -dispari-");

while ( pariODispari.length === 0 || 
    ( pariODispari.trim().toLowerCase() != 'pari' && pariODispari.trim().toLowerCase() != 'dispari')){
    pariODispari = prompt("Inserisci -pari- o -dispari-");
}

let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

while (numeroUtente < 1 || numeroUtente >= 6)  {
    numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

console.log(pariODispari);
console.log(numeroUtente);


let numeroRandom =  getRandomNumber(1,5);
let somma = numeroUtente + numeroRandom ;
console.log(" Numero computer: " + numeroRandom);

let risultatoPariODispari = checkPariODispari(somma);


if (risultatoPariODispari == pariODispari){
    console.log('HAI VINTO!');
} else {
    console.log('HA VINTO IL PC');
}

function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkPariODispari(numero){
    if (numero % 2 == 0){
        return 'pari';
    }
    return 'dispari';
}