/* Dado tres arrays de números, sacar en un nuevo array la intersección de estos. */

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];
debugger
const inters =() => { 
   let result = arrNumber2.filter(s => arrNumber1.indexOf(s) !== -1 && arrNumber3.indexOf(s) !== -1)
    return result
}

console.log(inters());