class TipoPlazo {
    constructor (nombre, interesxdia, interesanual, valor){
    this.nombre = nombre;
    this.interesxdia = interesxdia;
    this.interesanual = interesanual;
    this.valor = valor;

    }
    get_datos(){
        console.log("<----------->");
        console.log("Nombre: ", this.nombre);
        console.log("Interesxdia: ", this.interesxdia);
        console.log("Interes Anual: ", this.interesanual);
        console.log("Valor : ", this.valor);
        console.log("");
    }
    
}


let lista_plazos = [];

lista_plazos.push( new TipoPlazo("Tradicional" , 0.18 , 65.7 , 1) );
lista_plazos.push( new TipoPlazo("Banco Central" , 0.20 , 73, 2 ) );
lista_plazos.push( new TipoPlazo("FMI" , 0.14, 51.1, 3) );





console.log("Lista de Plazos Fijos");

for( let TipoPlazo of lista_plazos ){

    TipoPlazo.get_datos();
}

function CalcularPlazo(monto, dias){
    if (monto > 999 && dias > 29) {
          
        return true;
        
      
    }
    else{
        return false;
    }
   }

function buscar_tipoplazo( TipoPlazo ){

     TipoPlazo == tipo;
        return console.log(" true buscar tipo plazp")
     
}

let form = document.getElementById("formulario");
 let simular = (e) => {
    e.preventDefault();

    const monto = document.getElementById('monto_ingresado').value;
    const dias = document.getElementById('dias_ingresado').value;
    const tipo = document.getElementById('Plazo').value;
    console.log (monto, dias, tipo);
    
    //CalcularPlazo(monto.value, dias.value);
   if (CalcularPlazo(monto, dias)){
    let interes = 0;
    if(tipo == 1){
        interes = lista_plazos[0].interesxdia;
        console.log(interes);

    }else if (tipo == 2){
        interes = lista_plazos[1].interesxdia;
        console.log(interes);
    }else if (tipo == 3){
        interes = lista_plazos[2].interesxdia;
        console.log(interes);
    }
     const Total =Math.round (monto * (interes * dias));
     const mensajeDiv = document.getElementById("mensaje");
     mensajeDiv.textContent = `Ud va a recibir a finalizar su plazo fijo: $${Total} pesos Argentinos`;
     const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Plazo fijo realizado con Exito!!'
      })
     console.log("funciona" + Total);
    

   }
   else{
    Swal.fire({
        title: 'Error!',
        text: 'Fijese que los datos que ingreso sean correctos!!',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    console.log("no funciona")
   }
    

 };

 form.addEventListener("submit", simular)