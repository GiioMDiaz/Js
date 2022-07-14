// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con 
// unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano 
// indicando si es una ciudad de España.

const arrCities = [
    { city: 'Logroño', country: 'Spain', capital: false },
    { city: 'Paris', country: 'France', capital: true },
    { city: 'Madrid', country: 'Spain', capital: true },
    { city: 'Rome', country: 'Italy', capital: true },
    { city: 'Oslo', country: 'Norway', capital: true },
    { city: 'Jaén', country: 'Spain', capital: false }
]

var newArr = []
var index
for (index = 0; index <= arrCities.length - 1; index++) {
    if (arrCities[index].capital === false) {
        let isSpain = false;
        if (arrCities[index].country === "Spain") {
            isSpain = true;
        }
        newArr.push({
            "city": arrCities[index].city,
            "isSpain": isSpain
        })
        console.log(newArr)
    }
}