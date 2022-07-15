/* Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.
La función debe tener dos parámetros:
El primer parámetro es el array entero que se quiere dividir.
El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro. */

const arraySplit = (array, length) => {
    const newArr = [];

    let i;
    for (i = 0; i < array.length; i += length) {
        const item = array.slice(i, i + length);
        newArr.push(item);
    }
    return newArr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let length = 3
console.log(arraySplit(arr, length))
