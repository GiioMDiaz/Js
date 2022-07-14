/*Crea una función que redondee un número float a un número específico de decimales. 
La función debe tener dos parámetros: 
    ***Primer parámetro es un número float con x decimales

    ***Según parámetro es un int que indique el número de decimales al que redondear

    ***Evitar usar el método toFixed()*/

    const roundNum = (num, dec) =>{
        var float = parseFloat(num);
        var result = Math.round(float*Math.pow(10,dec))/Math.pow(10,dec);
        return result;
    }

    roundNum()
