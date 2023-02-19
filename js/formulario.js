/**
 // EXPREISONES REGULARES: estan basadas en el idioma inglés, no existe ñ ni acentos
 *  Podemos declararlas de dos formas:
 *      ==> const expReg = new RegExp("patron", "banderas");
 *  
 *          ó...
 * 
 *      ==> const expReg = /patron/;
 *          -> esta es la forma moderna
 * 
 *      ->Banderas: son los elementos que afectan a la busqueda, hay 6 en total
 *              - i (no distingue entre mayusculas o minusculas)
 *              - g (si no se pone, solo se obtiene la primer coincidencia, sino todas)
 * 
 *      -> Conjunto: 
 *              []  cuando se encuentra algunos de los caracteres declarados dentro de los [] Dentro de los corchetes los simbolos son simbolos. Si pongo un . me refiero al . como simbolo
 *              [^] cuando NO se encuentran algunos de los caracteres declarados dentro de los []
 *              ()  permite encontrar palabras que comparten caracteres
 * 
 *      ->Rangos:
 *              por ej [0-5] entre el 0 y 5
 *                     [a-z] entre la a y la z
 * 
 *      ->Cuantificadores: cuantas veces debe aparecer
 *              {n} n cantidad de caracteres
 *              {x,n} ENTRE x y n cantidad de caracteres
 *              {n,} DESDE n cantidad de caracteres
 *          Abreviaciones:
 *              +
 *              ?
 *              *
 * 
 * 
 *      -> Metodo .match() recibe una expresion regular, y genera un array con los rdos.
 *      -> .join() convierte el array en un dato tipo string
 * 
 *      -> Caracteres: 
 *              -Inclusivos: coincide con el conjunto:
 *                      .    cualquier caracter excepto línea nueva
 *                      \d   cualquier digito. Lo contrario sería: \D ningun digito
 *                      \s   simbolos de espacio, tabulaiones, nueva línea
 *                      \w   letras (sin acentos ni caracteres especiales), digitos (entre el 0 y 9) y guion bajo
 *              -Exclusivos: coincide con lo que NO sea parte del conjunto
 * 
 *      -> Anclas: obligan a js a verificar la condicion principio/fin de texto (del string)
 *              ^ inicio : la regExp debe encontrarse al inicio de la cadena
 *              & final  : la regExp debe encontrarse al final de la cadena
 *              ^regExp$ : la regExp debe coincidir al principio y al final de la cadena
 * 
 *       ->Escapar caracteres y limite de palabras:
 *              - Escapar caracteres: usar un caracter como un un valor tipo string
 *                  lo hacemos con \ antes del caracter
 *              -limite de palabras: sirve para buscar una palabra o texto dentro de todo el texto completo.
 *                por ej si quiero buscr la palabra JavaScript: /\bJavaScript\b/;
 * 
 *        ->Grupos de captura:
 */

const regexpSB = /[A-Z]/; // Texto de la A a la Z en mayús
const regexpCB = /[A-Z]/gi;
const arr="Hola".match(regexpCB);
console.log(arr);
//el metodo join() convierte el array en un string(saca las comas)
const strArr = arr.join("");
console.log(strArr);
//carcateres
const regExp1 = /[.\D]/gi; 
console.log("Hola .-*45".match(regExp1)); //guarda todo menos los numeros(digitos)
//anclas
const regExp2 = /^perro/gi; 
console.log("gato perro Hola .-*45".match(regExp2));//da null, porque no empieza con la palabra "perro"
const regExp3=/perro$/gi;
console.log("gato  Hola .-*45perro".match(regExp3));//ok, termina con la palabra "perro"
//ejemplo escapae y limite de palabra:
const regExp4=/\bsalem\. El es\b/gi; //busca la frase "salem. El es"
console.log("Mi gato se llama salem. El es de color negro".match(regExp4));

// VALIDACIÓN DE EMAIL:
const regMail= /[-.\w]+@([\w-]+\.)+[\w-]+/g;
//usamos la exp reg para analizar la estructura de mail que ingresamos:
console.log(regMail.test("npodmoguilny@sarasa.com"));
// .test() es como usabamos .match() anteriormente, pero nos devuelve true o false

//Palabras con acentos y otros caracteres especiales:
const regExp5=/^[A-z\u00c0-\u017F\s]+$/g;
console.log(regExp5.test("champiñón")); //esto da true

//Validación de contraseñas seguras:
const contSeg= /^[A-z\d@$_\-?¡!]{8,16}$/g;
console.log(contSeg.test("Una123pass"));

//Validar hora:
const regExphora= /([01]\d|2[0-3]):[0-5]\d/g; // | usamos para decir ó..
console.log(regExphora.test("04:45"));