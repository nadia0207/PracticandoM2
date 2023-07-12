//Seleccionando Elementos

//*Forma 1
//Por ID
let elementoPorId = document.getElementById('parrafo1');
elementoPorId.innerHTML = 'HTML';

//Por nombre de la clase
let elementosPorClase = document.getElementsByClassName('parrafos');
console.log(elementosPorClase.length);
elementosPorClase[1].innerHTML = 'CSS'
console.log(elementosPorClase[1]);

//Por etiqueta
let elementosPorEtiqueta = document.getElementsByTagName('p');
console.log(elementosPorEtiqueta.length);
elementosPorEtiqueta[2].innerHTML = 'Javacript'

//Modificar estilos
elementoPorId.style.background = 'black';
elementoPorId.style.color='white';
elementoPorId.style.borderRadius = '8px';
elementoPorId.style.width = '250px';
elementoPorId.style.textAlign = 'center';

//*Forma 2
//Por ID
let elementoPorId2 = document.querySelector('#parrafo4');
elementoPorId2.innerHTML = 'subcribete';

//Por Clase
let elementosPorClase2 = document.querySelector('.parrafos');// aqui solo trae el primer elemento
console.log(elementosPorClase2);
let elementosPorClase3 = document.querySelectorAll('.parrafos');// aqui si trae todos los elementos pero como NodeList
console.log(elementosPorClase3);

//En la siguiente linea transformaremos el NodeList en Arreglo
let arreglo = [...elementosPorClase3];
console.log(arreglo);
arreglo[4].innerHTML = 'a Codingtube';

//Por etiqueta
let elementosPorEtiqueta2 =document.querySelectorAll('p');
elementosPorEtiqueta2[5];
elementosPorEtiqueta2[5].innerHTML = 'ahora!'
