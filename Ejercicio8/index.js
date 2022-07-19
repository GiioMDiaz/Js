/*Crea una función que convierta un número de bytes en un formato con valores legibles 
('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

La función debe tener 2 parámetros:

***Primer parámetro debe ser el número de bytes

***Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado 
(esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.*/

function bytesToSize(bytes, num2) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', "PB", "EB", "ZB", "YB"];
    if (bytes == 0) return '0 Bytes';
    if (bytes == 1) return "1 Byte";
    if (bytes < 0) return "El numero ingresado no puede ser negativo"
    let i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    const result = (bytes / Math.pow(1024, i)).toPrecision(num2 + 1) + ' ' + sizes[i];
    return result
}
bytes = 6516516516
console.log(bytesToSize(bytes, 2)); 