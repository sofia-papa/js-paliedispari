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
