$(document).ready(function(){
// Un alert espone 5 numeri casuali diversi.
//funzione che genera un numero random
function getRandomNumber (numMin,numMax) {
  return Math.floor(Math.random() * (numMax - numMin)) + 1;
}
//funzione che controlla se un numero è inserito in un array
function controllo_numero(lista, numero){
  var find = false;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i] == numero) {
      find = true;
    }
  }
  return find;
}
//Definisco un array vuoto dove inseriremo i numeri generati casualmente
  var listaNumeri = [];
//Creo un ciclo che genera i cinque numeri random e li mostro in un alert
  while (listaNumeri.length < 5) {
    var numeroRandom = getRandomNumber(1,100);
      if (!listaNumeri.includes(numeroRandom)) {
      listaNumeri.push(numeroRandom);
      }
  }
  alert(listaNumeri);
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.


  setTimeout(function(){
    var listaNumUtente = [];
    var listaControllo = [];
    console.log(listaNumUtente);
    console.log(listaControllo);
    while (listaNumUtente.length<5) {
    var numeroUtente = parseInt(prompt("Inserisci uno dei cinque numeri"));
    if (!listaNumUtente.includes(numeroUtente)) {
      listaNumUtente.push(numeroUtente);
    }
    if (controllo_numero(listaNumeri, numeroUtente) == true) {
      listaControllo.push(numeroUtente);
    }
  }
  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  if (listaControllo.length == 0) {
    alert ("Non ti sei ricordato nessun numero!");
  } else {
   alert("Ti sei ricordato " + listaControllo.length +" numeri: " + listaControllo);
  }
}, 3000);

});
