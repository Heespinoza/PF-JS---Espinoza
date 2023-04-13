//class TipoPlazo {
   // constructor (nombre, interesxdia, interesanual, valor){
    //this.nombre = nombre;
    //this.interesxdia = interesxdia;
    //this.interesanual = interesanual;
    //this.valor = valor;

    //}
    //get_datos(){
      //  console.log("<----------->");
        //console.log("Nombre: ", this.nombre);
        //console.log("Interesxdia: ", this.interesxdia);
        //console.log("Interes Anual: ", this.interesanual);
        //console.log("Valor : ", this.valor);
        //console.log("");
    //}
    
//}


let lista_plazos = [];

fetch("./JS/tiposplazos.json")
.then(response => response.json())
.then(data => {
    lista_plazos = data;
    console.log (lista_plazos);
})

//lista_plazos.push( new TipoPlazo("Tradicional" , 0.18 , 65.7 , 1) );
//lista_plazos.push( new TipoPlazo("Banco Central" , 0.20 , 73, 2 ) );
//lista_plazos.push( new TipoPlazo("FMI" , 0.14, 51.1, 3) );




console.log("Lista de Plazos Fijos");

//for( let TipoPlazo of lista_plazos ){

    //TipoPlazo.get_datos();
//}




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
    let TNA = 0;
    if(tipo == 1){
        interes = lista_plazos[0].interesxdia;
        TNA = lista_plazos[0].interesanual;
        console.log(interes);

    }else if (tipo == 2){
        interes = lista_plazos[1].interesxdia;
        TNA = lista_plazos[0].interesanual;
        console.log(interes);
    }else if (tipo == 3){
        interes = lista_plazos[2].interesxdia;
        TNA = lista_plazos[0].interesanual;
        console.log(interes);
    }

     const porcentaje= (interes * monto)/ 100; 
     const intereses  = Math.round (porcentaje * dias);
     const Total =parseFloat( intereses) + parseFloat (monto); 
    
     const regisDiv = document.getElementById ("registrar");
     regisDiv.innerHTML = '<div class="signupFrm1"> <form action="" class="form"> <div class="inputContainer" id="mensaje"></div> <div class="inputContainer" id="mensaje1"></div> <div class="inputContainer" id="mensaje2"></div> <a href="Registro.html" class="btn btn-success"> Registrate!</a> </form> </div>';
     
     regisDiv.innerHTML;
     const mensajeDiv = document.getElementById("mensaje");
     mensajeDiv.textContent = `Ud va a recibir a finalizar su plazo fijo: $${Total} pesos Argentinos.`;
     const mensajeDiv1 = document.getElementById("mensaje1");
     mensajeDiv1.textContent =`Taza Actual (TNA): ${TNA}%`;

     const mensajeDiv2 = document.getElementById("mensaje2");
     mensajeDiv2.textContent = `Intereses: $${intereses} `;

    
     console.log("funciona" + Total);
    //----------- prueba
   


   }
   else{
    Swal.fire({
        title: 'Error!',
        text: 'Fijese que los datos que ingreso sean correcto!!',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    console.log("no funciona")
   }
    

 };

 form.addEventListener("submit", simular)