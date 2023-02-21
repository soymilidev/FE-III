const tripulantes = [
    {nombre: "Mr. Poindibags", esImpostor: true},
    {nombre: "Bombom", esImpostor: false},
    {nombre: "Tito", esImpostor: false},
    {nombre: "X-Ray", esImpostor: false},
    {nombre: "Fixfox", esImpostor: false},
];


/* 
// implementación con for
// Creamos un nuevo array
let tripulacion = [];
// Iteramos sobre cada elemento en el array tripulantes
for(let i=0; i<tripulantes.length; ++i) {
let tripulante =
`${ tripulantes[i].nombre} ${tripulantes[i].esImpostor ? '' : 'no' } era el impostor`;
// Metemos cada tripulante en el nuevo array
tripulacion.push(tripulante);
}

console.log(tripulacion) 
*/


// implementación con map
// Debemos invocar la función sobre el array tripulantes y pasamos como primer argumento una función que toma 
// cada elemento (en este caso lo nombramos tripulante) y usa una plantilla literal (template literal) para leer 
// los datos del elemento tripulante.nombre y tripulante.esImpostor y crear la frase:
let tripulacion = tripulantes.map(
    tripulante =>
    `${ tripulante.nombre} ${tripulante.esImpostor ? '' : 'no ' } era el impostor`
);

console.log(tripulacion) 
