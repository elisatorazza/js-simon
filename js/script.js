$(document).ready(function(){
  // Un alert espone 5 numeri casuali diversi.
  var listaNumeri = [];

  for (var i = 0; i<5; i++) {
    var numeroRandom = Math.floor(Math.random() * 100);
    listaNumeri.push(numeroRandom);
  }
  alert(listaNumeri);
  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  setTimeout(function(){
    var listaNumUtente = [];

    console.log(listaNumUtente);
    for (var i = 0; i<5; i++) {
    var numeroUtente = parseInt(prompt("Inserisci uno dei cinque numeri"));
    listaNumUtente.push(numeroUtente);
  }

  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
  var listaControllo = [];
  console.log(listaControllo);

  for (var i = 0; i<5; i++) {
    var trovato = false;
    if (listaNumUtente[i] == listaNumeri[i]) {
      trovato = true;
      listaControllo.push(listaNumeri[i]);
    }
  }}, 3000);
console.log(listaControllo);

});
