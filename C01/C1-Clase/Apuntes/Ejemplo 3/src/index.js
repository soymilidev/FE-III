//En vez de armar la lista en el HTML (ejemplo 2) definimos un array llamado lista con las pelis.
const lista = [
    "The big lebowski",
    "Mean Girls",
    "Die Hard",
    "Hot Fuzz",
    "Kill Bill",
    "John Wick",
    "Shrek",
    "Ted",
    "The Godfather",
    "Avengers",
    "Amelie",
    "The Dark Knight",
    "Angry Men",
    "Flashback",
    "Luca",
    "Cruella",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "Fight Club",
    "Forrest Gump",
    "Inception",
    "Goodfellas",
    "Life Is Beautiful",
    "Spirited Away",
    "Interstellar",
    "The Pianist",
    "etc"
  ];
  
  document.getElementById("root").innerHTML = 
  `<ul>${lista
    .map((pelis) => `<li>${pelis}</li>`)
    .join("")}</ul>`;

// map --> crear un nuevo array de elementos li con los titulos
// La función map es un método que se utiliza en un array para crear un nuevo array con los elementos transformados según x cuestion. 
// En este caso, para crear un nuevo array que contiene elementos HTML <li> que representan cada título. 

// join --> concatenar todos los elementos del array en una cadena. Sin esto, quedaria una lista separada por comas (,).