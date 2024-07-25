//cambio nombre
let encabezado = document.querySelector("h1")
console.log(encabezado)
encabezado.innerHTML = "BlackBelt   : Articulos de Artes Marciales"


//agragrar botones dinamicos que cambian color de h1

let botonArojo = document.querySelector("#btn-rojo")
let botonAazul = document.getElementById("btn-azul")


function cambiarArojo() {
    console.log("cambio a rojo")
    encabezado.style.color = "red"
}
botonArojo.onclick = cambiarArojo

function cambiarAazul() {
    encabezado.style.color = "blue"
}
botonAazul.onclick = cambiarAazul
//
//vinculacion js a html

const principal = document.getElementById('principal')
const lista = document.getElementById('lista')
const inputProducto = document.querySelector('input')
const precio = document.querySelector('input[type="number"]')



function añadirProducto(ev) {

    ev.preventDefault()
    console.log('añadiendo producto')

    const nuevoProducto = document.createElement('div')
    nuevoProducto.className = 'prod'
    // nuevoProducto.innerText = inputProducto.value
    nuevoProducto.innerHTML = `
    <h2>${inputProducto.value}</h2>
    <p>${precio.value}€</p>
    <button onclick>X</button>
    `

    lista.append(nuevoProducto)

    principal.reset()
    principal.focus()

}
principal.onsubmit = añadirProducto


