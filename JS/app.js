
let Respuesta =  prompt ('Ud en que metodo de inversion esta interesado?\n Plazo Fijo\n Fondo de Inversion\n ( por favor escriir la respuesta deseada)')
if (Respuesta === "Plazo Fijo"){

let monto = prompt('Ingrese monto de Dinero en Pesos Argentinos')
let dias = prompt('ingresa cantidad de dias')
while (monto < 1000 || dias < 30) {
    alert('El monto minimo a ingresar es de $1000 Pesos Argentinos y el minimo de dias es de 30.')
    monto = prompt('Ingrese monto de Dinero')
    dias = prompt('ingresa cantidad de dias')

}
let plazofijo = prompt('Elija el tipo de Plazo Fijo.\n .Tradicional\n .Banco Central')

switch (plazofijo) {

    case 'Tradicional':
        tasadeinteresa = 0.18
        console.log('interes anual 65.7%')
        tasaanual = '65.7%'
        break
    case 'Banco Central':
        tasadeinteresa = 0.20
        console.log ('interes anual 73%')
        tasaanual = '73%'
        break
}

alert('Ud Obtendria: $' + (dias * tasadeinteresa) * monto  + '\n Interes por dia: ' + tasadeinteresa+ '%' + '\n Interes Anual: ' + tasaanual )
}
else{
    alert ('Por favor cominicarse al 0800 888 4323, para mas informacion ')
}
