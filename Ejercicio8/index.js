/*Crea una función que convierta un número de bytes en un formato con valores legibles 
('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

La función debe tener 2 parámetros:

***Primer parámetro debe ser el número de bytes

***Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado 
(esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.*/

function covert(num1, num2 = 3) {


    if(num1 >= 1208925819614629174706176) { num1 = (num1 / 1208925819614629174706176).toPrecision(num2) + " YB"; }
    else if (num1 >= 1180591620717411303424) { num1 = (num1 / 1180591620717411303424).toPrecision(num2) + " ZB"; }
    else if (num1 >= 1152921504606846976) { num1 = (num1 / 1152921504606846976).toPrecision(num2) + " EB"; }
    else if (num1 >= 1125899906842624) { num1 = (num1 / 1125899906842624).toPrecision(num2) + " PB"; }
    else if (num1 >= 1099511627776) { num1 = (num1 / 1099511627776).toPrecision(num2) + " TB"; }
    else if (num1 >= 1073741824) { num1 = (num1 / 1073741824).toPrecision(num2) + " GB"; }
    else if (num1 >= 1048576) { num1 = (num1 / 1048576).toPrecision(num2) + " MB"; }
    else if (num1 >= 1024) { num1 = (num1 / 1024).toFixed(2) + " KB"; }
    else if (num1 > 1) { num1 = bytes + " bytes"; }
    else if (num1 == 1) { num1 = bytes + " byte"; }
    else { num1 = "0 bytes"; }
    return bytes;
}
console.log(formatSizeUnits())