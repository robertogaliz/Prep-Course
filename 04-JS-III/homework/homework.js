// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i=0;i<array.length;i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  for(var i=0;i<palabras.length;i++){
    if(frase!==undefined&&i!==palabras.length-1){
      var frase=frase+palabras[i]+" ";    
    }
    else if(i===0&&i===palabras.length-1){
      var frase=palabras[i];
    }
    else if(i===palabras.length-1){
      var frase=frase+palabras[i];
    }
    else{
      var frase=palabras[i]+" ";
    } 
  }
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var comprueba=false;
  for(var i=0;i<array.length;i++){
    if(array[i]===elemento||comprueba===true){
      var comprueba=true;
    }
    else {
      return false;
    }
  }
  return comprueba;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  for(var i=0;i<numeros.length;i++){
    if(Number.isInteger(numeros[i])){
      if(suma!==undefined){
        var suma=suma+numeros[i];
      }
      else{
        suma=numeros[i];
      }
    }
    else return undefined;
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  for(var i=0;i<resultadosTest.length;i++){
    if(Number.isInteger(resultadosTest[i])){
      if(suma1!==undefined){
        var suma1=suma1+resultadosTest[i];
      }
      else{
        suma1=resultadosTest[i];
      }
    }
    else return undefined;
  }
  return suma1/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  Mayor=0
  for(var i=0;i<numeros.length;i++){
    if(Number.isInteger(numeros[i])){
      if(numeros[i]>Mayor){
          Mayor=numeros[i];
      }
    }
  }
  return Mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length===0){
    producto=0;
  }
  else{
    for(i=0;i<arguments.length;i++){
      if(i===0){
        producto=arguments[i];
      }
      else{
        producto=producto*arguments[i];
      }
    }
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var arreglo2=[];
  for(i=0;i<arreglo.length;i++){
    if(arreglo[i]>18){
      arreglo2.push(arreglo[i]);
    }
  }
  return arreglo2.length;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia===1||numeroDeDia===7){
    return "Es fin de semana";
  }
  else{
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var check=Math.floor(n/(Math.pow(10,(n.toString().length-1))));
  if(check===9){
    return true;
  }
  else{
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  while(arreglo.length>0){
    if(arreglo[0]===arreglo.pop()){
      arreglo.pop();
      return true;
    }
    else{
      var arreglo=[];
      return false;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2=[];
  for(i=0;i<array.length;i++){
    if(array[i]==="Enero"||array[i]==="Marzo"||array[i]==="Noviembre"){
      array2.push(array[i]);
    }
  }
  if(array2.length!==3){
    return "No se encontraron los meses pedidos";
  }
  else{
    return array2;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2=[];
  for(i=0;i<array.length;i++){
    if(array[i]>100){
      array2.push(array[i]);
    }
  }
  return array2;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  arrayBreak=[];
  for(i=0;i<=10;i++){
    if(i===0){
      var aumento=numero;
    }
    else{
      var aumento=aumento+2;
      if(aumento===i){
        return "Se interrumpió la ejecución";
        break;
      }
      else{
        arrayBreak.push(aumento);
      }
    }
  }
  return arrayBreak;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  arrayContinue=[];
  for(i=0;i<=10;i++){
    if(i===0){
      var aumento=numero;
    }
    else if(i===5){
      continue;
    }
    else{
      var aumento=aumento+2;
      arrayContinue.push(aumento);
    }
  }
  return arrayContinue;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
