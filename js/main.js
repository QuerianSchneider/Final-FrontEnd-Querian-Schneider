const productos=[
    {id:1,nombre:"Lataffa Khamrah EDP 100ml",precio:115000,imagen:"../img/perfume 1.png"},
    {id:2,nombre:"Dior Sauvage Elixir 60ml",precio:256000, imagen:"../img/perfume 2.jpg"},
    {id:3,nombre:"Lataffa Honor & Glory 100ml",precio:83000,imagen:"../img/perfume 3.jpg"},
    {id:4,nombre:"Jean Paul Gaultier Le Male EDP 125ml",precio:315000,imagen:"../img/perfume 4.jpeg"},
    {id:5,nombre:"Acqua Di Gio EDP 125ml",precio:190000,imagen:"../img/perfume 5.webp"},
    {id:6,nombre:"Jean Paul Gaultier Scandal Pour Homme EDT 100ml",precio:230000,imagen:"../img/perfume 6.png"},
    {id:7,nombre:"Stronger With You EDT 50 ml",precio:140000,imagen:"../img/perfume 7.jpg"},
    {id:8,nombre:"Paco Rabanne Invictus Victory Elixir EDP 100ml",precio:210000,imagen:"../img/perfume 8.webp"},
    {id:9,nombre:"Ralph Lauren Polo Blue EDT 75ml",precio:91000,imagen:"img/perfume 9.webp"},
    {id:10,nombre:"Dior Fahrenheit EDT 75ml",precio:140000,imagen:"img/perfume 10.webp"},
    {id:11,nombre:"Viktor & Rolf SpiceBomb EDT 50ml",precio:163000,imagen:"img/perfume 11.webp"},
    {id:12,nombre:"Paco Rabanne One Million EDT 100ml",precio:178000,imagen:"img/perfume 12.webp"}
];
const listaProductos = document.getElementById("lista-productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const botonRealizarCompra = document.getElementById("btn-realizar-compra");

function irASeccion(idSeccion) {
    const seccion = document.getElementById(idSeccion);
    if (seccion) {
        seccion.scrollIntoView();
    }
}

const botonSobreNosotros=document.getElementById("btn-sobre-nosotros");
const botonProductos=document.getElementById("btn-productos");
const botonCarrito=document.getElementById("btn-carrito");

botonSobreNosotros.addEventListener("click", () => irASeccion("presentacion"));
botonProductos.addEventListener("click", () => irASeccion("productos"));
botonCarrito.addEventListener("click", () => irASeccion("carrito"));
botonRealizarCompra.addEventListener("click", function() {
    alert("Compra realizada con éxito. Muchas gracias!");
    carrito = [];  
    pintarCarrito();
});

let carrito = [];

function pintarProductos() {
    let contenidoHTML = "";
    productos.forEach((producto, index) => {
        contenidoHTML += `
            <div class="tarjeta-producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
                <button onclick="agregarAlCarrito(${index})">Agregar al carrito</button>
            </div>
        `;
    });
    listaProductos.innerHTML = contenidoHTML;
}
/*carrito*/
function agregarAlCarrito(index) {
    const producto = productos[index];
    const productoEnCarrito = carrito.find(p => p.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        carrito.push({...producto, cantidad: 1});
    }

    pintarCarrito();
}

function pintarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach(producto => {
        listaCarrito.innerHTML += `
            <div class="producto-carrito">
                <p>${producto.nombre}</p>
                <p>Cantidad: ${producto.cantidad}</p>
                <p>Precio: $${producto.precio.toLocaleString()}</p>
            </div>
        `;
        total += producto.precio * producto.cantidad;
    });

    totalCarrito.textContent = `Total: $${total.toLocaleString()}`;
}
pintarProductos();
