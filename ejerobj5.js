let datos={animal:"perro",numero:231,fecha:2022};

validartipo(datos, "number");

function validartipo(datos,tipo){
    for(clave in datos){
        if(typeof(datos[clave])!=tipo)
            delete datos[clave];
    }
}

for(clave in datos)
    console.log(datos[clave]);