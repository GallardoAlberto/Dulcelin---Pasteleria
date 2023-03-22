let cookies = [
    {
        nombre : "Crema de Avellana",
        descripcion : "",
        precio: "2,50€",
        imagen: 'cremaAvellana.jpeg'
    },
    {
        nombre : "Crema de Cacahuete",
        descripcion : "",
        precio: "2,50€",
        imagen: 'cremaCacahuete.jpeg'
    },
    {
        nombre: "Lacasitos",
        descripcion: "",
        precio: "2,50€",
        imagen : "lacasitos.jpeg"        
    },
    {
        nombre : "M&M's",
        descripcion : "",
        precio: "2,50€",
        imagen: 'M&Ms.jpeg'
    },    
    {
        nombre : "Bombón de Ferrero",
        descripcion : "",
        precio: "2,50€",
        imagen: 'ferrero.jpeg'
    },
    {
        nombre : "Carrot Cake",
        descripcion : "",
        precio: "2,50€",
        imagen: 'carrotCake.jpeg'

    },
    {
        nombre : "Kinder Bueno",
        descripcion : "",
        precio: "2,50€",
        imagen: 'kinder.jpeg'
    },
    {
        nombre : "Oreo",
        descripcion : "",
        precio: "2,50€",
        imagen: 'oreo.jpeg'
    },
    {
        nombre : "Chocolate y menta",
        descripcion : "",
        precio: "2,50€",
        imagen: 'chocoMenta.jpeg'
    },
    {
        nombre : "Nubes",
        descripcion : "",
        precio: "2,50€",
        imagen: 'nubes.jpeg'
    },
    {
        nombre : "Pistacho",
        descripcion : "",
        precio: "2,50€",
        imagen: 'pistacho.jpg'
    },
    {
        nombre : "Cereales Lions",
        precio: "2,50€",
        imagen: 'cerealesLions.jpeg'
    },
    {
        nombre : "Dulce de Leche",
        descripcion : "",
        precio: "2,50€",
        imagen: 'dulceLeche.jpeg'
    },
    {
        nombre : "Twix",
        descripcion : "",
        precio: "2,50€",
        imagen: 'twix.jpeg'
    },
    {
        nombre : "Queso de Cabra con Miel de la Sierra",
        descripcion : "",
        precio: "2,50€",
        imagen: 'quesoMiel.jpeg'
    },
]
let cajaCookies = document.querySelector(".cookies");

for (let i = 0; i < cookies.length; i++) {

    let div = document.createElement("div");

    div.innerHTML = `
        <p>${cookies[i].nombre}</p>
        <p>${cookies[i].precio}</p>
    `;

    div.style.background = `url("multimedia/cookies/${cookies[i].imagen}")`;
    div.style.backgroundPosition = "center center";
    div.style.backgroundSize = "cover";
    div.style.backgroundRepeat = "no-repeat";

    cajaCookies.appendChild(div);
}