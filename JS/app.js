class TipoPlazo {
    constructor (nombre, interesxdia, interesanual){
    this.nombre = nombre;
    this.interesxdia = interesxdia;
    this.interesanual = interesanual;

    }
    get_datos(){
        console.log("<----------->");
        console.log("Nombre: ", this.nombre);
        console.log("Interesxdia: ", this.interesxdia);
        console.log("Interes Anual: ", this.interesanual);
        console.log("");
    }

     CalcularPlazo(monto, dias) {
        if (monto > 999 && dias > 29) {
            
            return true;
            
          
        }
        else{
            return false;
        }
        
    }
}


let lista_plazos = [];

lista_plazos.push( new TipoPlazo("Tradicional" , 0.18 , 65.7) );
lista_plazos.push( new TipoPlazo("Banco Central" , 0.20 , 73 ) );
lista_plazos.push( new TipoPlazo("FMI" , 0.14, 51.1) );





console.log("Lista de Plazos Fijos");

for( let TipoPlazo of lista_plazos ){

    TipoPlazo.get_datos();
}



function buscar_tipoplazo( TipoPlazo ){

    return TipoPlazo.nombre == Respuesta;
}

let Monto = document.getElementById("monto_ingresado");

Monto.addEventListener("input", function(e){
    let ingresomonto= e.target;
    console.log (ingresomonto.value);
})

let Dias = document.getElementById("dias_ingresado");

Dias.addEventListener("input", function(e){
    let ingresodias= e.target;
    console.log (ingresodias.value);
})

let Plazos = document.getElementById("Plazos");

Plazos.addEventListener("change", function(e){
    let Respuesta= e.target;
    console.log (Respuesta.value);
})



//let Respuesta =  prompt ('Ud que tipo de Plazo Fijo desea calcular?\n Tradicional\n Banco Central\n FMI\n  ( por favor escribir la respuesta deseada)')
let resultado_busqueda = lista_plazos.find( buscar_tipoplazo  );

//if( resultado_busqueda != undefined ){

    //console.log(resultado_busqueda);
    //let monto = prompt('Ingrese monto de Dinero en Pesos Argentinos, minimo $1000')
    //let dias = prompt('ingresa cantidad de dias, minimo 30 Dias')

    //if( resultado_busqueda.CalcularPlazo( monto, dias) ){

        //console.log('Ud Obtendria: $' + (dias * resultado_busqueda.interesxdia) * monto  + '\n Interes por dia: ' + resultado_busqueda.interesxdia+ '%' + '\n Interes Anual: ' + resultado_busqueda.interesanual );
        //resultado_busqueda.get_datos();
        //alert ('Ud Obtendria: $' + (dias * resultado_busqueda.interesxdia) * monto  + '\n Interes por dia: ' + resultado_busqueda.interesxdia+ '%' + '\n Interes Anual: ' + resultado_busqueda.interesanual );

    //}
    //else{
        //console.log("No se puede realizar calculo de Plazo Fijo que ud selecciono, por favor fijarse que el monto minimo de dinero es de $1000 ARG y 30 dias de minimo.\n Gracias!! ");
        //alert ("No se puede realizar calculo de Plazo Fijo que ud selecciono, por favor fijarse que el monto minimo de dinero es de $1000 ARG y 30 dias de minimo.\n Gracias!! ");
    //}

//}
