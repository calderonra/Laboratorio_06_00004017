arreglo = [7, 5, 6];

function sumaProm(arreglo) {
    var totalsum = 0;
    var prom;
    for (i = 0; i < arreglo.length; i += 1) {
        let aux = 0;
        aux = arreglo[i];
        totalsum = aux + totalsum;
        console.log(aux);
    }

    prom = totalsum / arreglo.length;

    console.log(totalsum);
    console.log(prom);
}