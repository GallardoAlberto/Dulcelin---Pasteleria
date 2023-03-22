let tartas = [
    {
        nombre : "Original",
        descripcion : "",
        precio: "30,00€",
        imagen: 'original.png'
    },
    {
        nombre: "Chocolate con Leche",
        descripcion: "",
        precio: "30,00€",
        imagen : "chocoLeche.png"        
    },
    {
        nombre : "Chocolate Blanco",
        descripcion : "",
        precio: "30,00€",
        imagen: 'chocoBlanco.jpeg'
    },    
    {
        nombre : "Chocolate Negro",
        descripcion : "",
        precio: "30,00€",
        imagen: 'chocoNegro.png'
    },
    {
        nombre : "Chocolate Jungly",
        descripcion : "",
        precio: "30,00€",
        imagen: 'chocoJungly.png'

    },
    {
        nombre : "Kinder Bueno",
        descripcion : "",
        precio: "30,00€",
        imagen: 'kinder.png'
    },
    {
        nombre : "Dulce de Leche",
        descripcion : "",
        precio: "30,00€",
        imagen: 'dulceLeche.png'
    },
    {
        nombre : "Nutella",
        descripcion : "",
        precio: "30,00€",
        imagen: 'nutella.jpeg'
    },
    {
        nombre : "Pistacho",
        descripcion : "",
        precio: "30,00€",
        imagen: 'pistacho.jpg'
    },
    {
        nombre : "Reese's",
        precio: "30,00€",
        imagen: 'reeses.jpeg'
    },
    {
        nombre : "Crema de Lotus",
        descripcion : "",
        precio: "30,00€",
        imagen: 'lotus.jpeg'
    },
    {
        nombre : "Chocolate Blanco y Fruta de la pasión",
        descripcion : "",
        precio: "30,00€",
        imagen: 'ChocoBlancoFruta.jpeg'
    },
]
let cajaTartas = document.querySelector(".tartas");

for (let i = 0; i < tartas.length; i++) {

    let div = document.createElement("div");

    div.innerHTML = `
        <p>${tartas[i].nombre}</p>
        <p>${tartas[i].precio}</p>
    `;

    div.style.background = `url("multimedia/tartas/${tartas[i].imagen}")`;
    div.style.backgroundPosition = "center center";
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";

    cajaTartas.appendChild(div);
}