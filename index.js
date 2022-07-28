let cliente1={
    nombre:"Mali",
    password:"123",
    correo:"mali@gmail.com",
    saldo:200
}
let cliente2={
    nombre:"Gera",
    password:"456g",
    correo:"gera@gmail.com",
    saldo:290
}
let cliente3={
    nombre:"Maui",
    password:"abc",
    correo:"maui@gmail.com",
    saldo:67
}
let clientes = [cliente1, cliente2, cliente3]


const form = document.getElementById('form')
const btn = document.getElementById("btn")

form.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    console.log('click')

    let user = document.getElementById("username").value
    let password = document.getElementById("psw").value

    /*for(let i=0; i<clientes.length; i++) {
        if (clientes[i].nombre == user && clientes[i].password == password) {
            alert("Bienvenido")
            break
            }
    }*/
    let found = clientes.find(function(element){
        if(element.nombre == user && element.password == password){
            sessionStorage.setItem("nombre",element.nombre)
            sessionStorage.setItem("saldo",element.saldo)

            return element
        }
        
    })
    if (found == null){
        alert("Ususario o password incorrectos")
    }
    else{
        
        window.location.replace("opciones.html")
        
    }

    
})

