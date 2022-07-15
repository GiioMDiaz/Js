/* Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” 
después de ser ejecutados por una función específica.
La fundación debe tener dos parámetros:

***Primer parámetro es un objeto con x número de campos y valores

***Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro */



const notBol = (arr, fn) => {

    let filt = arr.filter(x => !x);

    return filt

}

const arr = [null, undefined, "Hola", "ate", "", false, 9, 0, NaN];

console.log(notBol(arr, n => n));