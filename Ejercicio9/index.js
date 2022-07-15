/* Crea una función que a partir de un objeto de entrada, 
retorne un objeto asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parámetro. */

const lowercase = param1 =>
Object.keys(param1).reduce((value, key) => {
    value[key.toLowerCase()] = param1[key];
    return value;
}, {});

const Users = { NamE: "Giovanni", LAStnaME: 'Martinez' };
console.log(lowercase(Users));