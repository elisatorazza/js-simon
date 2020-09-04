$(document).ready(function(){

  // Un alert espone 5 numeri casuali diversi.
  var listaNumeri = [];
  console.log(listaNumeri);

  for (var i = 0; i<5; i++) {
    var numeroRandom = Math.floor(Math.random() * 100);
    listaNumeri.push(numeroRandom);
  }
  alert(listaNumeri);
  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.



});
