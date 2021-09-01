//palindroma

let parola = prompt("inserisci una parola");
let parolaPali = invertiParola(parola);

if(parola == parolaPali){
    console.log('è PALINDROMA');
  } else {
    console.log('non è palindroma');
  }
  
function invertiParola(str){
  var strInversa = str.split('').reverse().join('');  
  return strInversa;
}

//pari e dispari

let numero = parseInt(prompt("Inserisci un numero"))

for (i = 0; i < 5; i++ ){
        numeroComputer = getRandomInt(1,5);
    }
    console.log(numeroComputer);


//funzione per ottenere un numero randomico 
function getRandomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function IsNotUneven(numero){
    if (isNaN(numero) == false){
        return (numero %2 == 1 ?  true : false);
    } else {
        return null;
    }
}

console.log(numero);