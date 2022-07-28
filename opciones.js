let nombre = sessionStorage.getItem("nombre")
console.log(nombre)
document.getElementById("welcome").textContent = ("Bienvenid@ " + nombre)
let saldo = Number(sessionStorage.getItem("saldo"))
console.log(typeof(saldo))


let consultarSaldo = document.getElementById("consultar_saldo")
consultarSaldo.addEventListener("click",(cli1) =>{
    cli1.preventDefault()
    document.getElementById("monitor").textContent = ("Su salde es de: "+saldo+" pesos")
})

let retirarMonto = document.getElementById("retirar_monto")
retirarMonto.addEventListener("click",(cli2) =>{
    cli2.preventDefault()
    let monto = Number(document.getElementById("monto").value)
    saldo -= monto
    if(saldo < 10){
        alert("La cuenta no puede tener menos de 10 pesos")
        saldo += monto
    }
    else{
        document.getElementById("monitor").textContent = ("Saldo actual: "+saldo+" pesos")
    }
    
})

let ingresarMonto = document.getElementById("ingresar_monto")
ingresarMonto.addEventListener("click",(cli3) =>{
    cli3.preventDefault()
    let monto = Number(document.getElementById("monto").value)
    saldo += monto
    if(saldo > 990){
        alert("La cuenta no puede tener mas de 990")
        saldo -= monto
    }
    else{
        document.getElementById("monitor").textContent = ("Saldo actual: "+saldo+" pesos")
    }
})

let cerrarSesion = document.getElementById("cerrar")
cerrarSesion.addEventListener("click",(cli4) =>{
    cli4.preventDefault()
    window.location.assign("index.html")
})