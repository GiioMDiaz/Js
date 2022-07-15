/* Crea una función que elimine las etiquetas html o xml de un string.
La función debe tener un string como único parámetro. */

function removeHTMLTags(param) {
    if (param === null)
        return false;
    else if (param === '')
        return "No existe codigo que transformar"
    else
        param = param.toString();
    return param.replace(/(<([^>]+)>)/ig, '');
}

console.log(removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'));;
