console.log('Javascript avanzado - Clase 1')

/* -------------------------------------------------------------------- */
/*      Nuevos contructores de variables con ES6 (ECMAScript2015)       */
/* -------------------------------------------------------------------- */
console.log('ES5')

var numero = 5

console.log(numero)

var nombre = "Gabriel"

console.log(nombre);

numero = 6;

console.log(numero);

var nombre = "Sofía"

console.log(nombre);

/***
 *  Constructores nuevos
 *  let y const
 */

var hola1 = 'hola';
let apellido;

apellido = 'Garcia'
apellido = 1

console.log(apellido);
console.log(typeof apellido);

nuevoApellido()


console.log(apellido);

/***
 * const 
 */

const hola = 'Hola mundo'


console.log(hola);

function nuevoApellido(){
    let apellido = 'Reinozo'
    console.log(apellido);
    
}

function constantes(){
    const numero = 1;
    console.log(numero);
   /* variable definida con var fuera del ámbito*/
    console.log(hola1);
 
    console.log(apellido);

    if(true){
        const numero = 2;
        console.log(numero);
    }
}
constantes()


/***
 *  
 * Funciones * 
 * 
 */
/* Funciones anónimas */


console.log(resultado);

/* funciones tradicionales*/

function holaMundo(){
    /* console.log(this);*/
    console.log('Hola JS');
}

holaMundo()


let sumar = function(a,b){
    return a + b
}

var resultado = sumar(1,2)
/* Funciones de Flecha - Arrow Functions */

let sumarFlecha =  (a,b) => {
    console.log('Estoy en la funcion flecha');

}
console.log(sumarFlecha(2,4))


/***
 *  Concatenación de string en ES5
 * 
 */

let num1 = 5
let num2 = 4
   
console.log('La suma de ' + num1 + ' y ' + num2 + ' es: ' + sumar(num1,num2));

/***
 * Concatenación ES6
 * back ticks ` `
 */
console.log(`La suma de ${num1} y ${num2}  es: ${sumar(num1,num2)}`);

/***
 * Tipos Primitivos
 */

 /* number | string | boolean ( true, false) | null | undefined*/

 console.log(typeof num1);
 console.log(typeof sumar);
 console.log(typeof hola);


 let booleano = true; /* true o false */

 console.log(typeof booleano);

 /****
  * 
  * Tipo s de objeto - No primitivos
  * 
  *     tipo array | object | function
  * */
// Array empienzan en el indice 0
 let nombres = ['Gustavo', 'Gabriel', 'Sofía']


/* */
 for( let i=0; i<nombres.length; i++){
    console.log(nombres[i]);
 }

 /** Tipo de Dato Functions */

  var functionAnonima = function(){

  }

  var funcionFlecha = () =>{} /* función lambda */

  function conNombre (){

  }

  /****
   * BOM - Browser object model - window
   * DOM - Document object model - document
   */

  console.log(window.innerWidth);
  const h1 = document.getElementsByTagName('h1')
  const el = document.getElementById('head1')

  el.style.color = 'red';
  el.style.backgroundColor = '#000'

  const encabezados = document.querySelectorAll('h1')
  const encabezados1 = document.querySelectorAll('.encabezado')
  const encabezados2 = document.querySelectorAll('#head1')

  const encab = document.querySelector('h1')
  const encab1 = document.querySelector('.encabezado')
  const encab2 = document.querySelector('#head2')

  /****
   * Manipulación de DOM
   */

  const body = document.querySelector('body')

  const p = document.createElement('p')

  p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus P"

  body.appendChild(p)

  p.style.backgroundColor='#f6f0f0';
  p.style.fontSize='36px';
  p.style.fontSize='56px';

  p.classList.add('clase__parrafo')

  const img = document.createElement('img');

  img.src="https://images.unsplash.com/photo-1638913971251-832d29947de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  img.alt="Foto"

  body.appendChild(img)
  img.style.borderRadius = '5px'









