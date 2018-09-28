
arreglo = [1, 2, 3, 4, 5, 5, 9, 6, 1, 1];


function ocurrencia(num = 1, arreglo) {
    let cont = 0;
    for (i = 0; i < arreglo.length; i += 1) {
        if (arreglo[i] == num) {
            cont = cont + 1;

        }
    }
    console.log(cont);
}


