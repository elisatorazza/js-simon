$(document).ready(function(){
  // Un alert espone 5 numeri casuali diversi.
  var listaNumeri = [];

  for (var i = 0; i<5; i++) {
    var numeroRandom = Math.floor(Math.random() * 100) + 1;
    listaNumeri.push(numeroRandom);
  }
  alert(listaNumeri);
  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  function controllo_numero(lista, numero){
    var find = false;
    for (var i = 0; i < lista.length; i++) {
      if (lista[i] == numero) {
        find = true;
      }
    }
    return find;
  }

  setTimeout(function(){
    var listaNumUtente = [];
    var listaControllo = [];
    console.log(listaNumUtente);
    console.log(listaControllo);
    for (var i = 0; i<5; i++) {
    var numeroUtente = parseInt(prompt("Inserisci uno dei cinque numeri"));
    listaNumUtente.push(numeroUtente);
    if (controllo_numero(listaNumeri, numeroUtente) == true) {
      listaControllo.push(numeroUtente);
    }
  }
  if (listaControllo.length == 0) {
    alert ("Non ti sei ricordato nessun numero!");
  } else {
   alert("Ti sei ricordato " + listaControllo.length +" numeri: " + listaControllo);
  }
}, 30000);




  // Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.



  //



});
