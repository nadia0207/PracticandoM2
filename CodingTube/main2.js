//CREAR NODOS y AGREGARLOS

//Creamos un nodo tipo etiqueta p
const parrafoCuatro = document.createElement('p');
const parrafoCinco = document.createElement('p')
const parrafoseis = document.createElement('p')
const parrafosiete = document.createElement('p')

//Creamos un nodo de tipo texto
const textoParrafoCuatro = document.createTextNode('<h3>Párrafo 4 </h3>');

//agregamos texto al nodo
parrafoCinco.innerHTML = '<h3>Párrafo 5 </h3>';
parrafoseis.innerHTML = 'Párrafo 6';
parrafosiete.innerHTML = 'Párrafo 7';

//agregamos clase al nodo
parrafoseis.setAttribute('class','parrafos');
parrafosiete.className = 'parrafos';

//seleccionar elemento padre
const elementoPadre = document.querySelector('.padre'); //seleccionamos el div que tiene la clase llamada padre

//AGREGAR NODOS (elemento) al padre
elementoPadre.appendChild(parrafoCuatro);
parrafoCuatro.appendChild(textoParrafoCuatro);
elementoPadre.appendChild(parrafoCinco);

elementoPadre.append(parrafoseis,parrafosiete);

/*Diferencia entre createTextNode y innerHTML:
InnerHTML : convirte todo lo escrito en HTML y createTextNode considera todo como texto.
*/

