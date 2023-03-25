let testimonios = [
    {
        imagen : "juliocruz.png",
        nombre : "Julio Cruz",
        estrellas : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
        texto : `" Una maravilla las tartas de queso y las galletas, mi favorita la de kinder… un sabor inigualable, gracias a Miriam por su atención y cariño en todo momento. Se ve que le ha puesto ganas en montar este negocio. Cada cachito de sus productos lleva un poco de ella y eso se hace notar Súper recomendable "`
    },
    {
        imagen : "jonathanrueda.png",
        nombre : "Jonathan Rueda",
        estrellas : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
        texto : `" Aunque las fotos no hagan justicia, las tartas de queso (en este caso probé la de torrijas que, supongo, es estacional) están increíbles. Cremosidad perfecta, sabor literal a torrijas (y a toque de queso por supuesto). También probé un par de cookies, de pistacho y Snickers (cacahuete), y fantásticas. Ya sea para celebración o darte un capricho sitio muy recomendado. La chica que me atendió muy agradable y atenta. 10/10. "`
    },
    {
        imagen : "sacako.png",
        nombre : "SaCa Ko",
        estrellas : `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`,
        texto : `" Sólo podemos recomendar a Míriam y absolutamente todo sus productos. Hemos probado cookies, tartas de queso original y de sabores (brutal turrón en navidad!), Roscón, empanadillas y vasitos. Es imposible decidirse por una cosa, porque está todo espectacular. Una presentación preciosa y cuidada. Y qué decir de la atención... Una maravilla y siempre dando consejos a la hora de servir. Absolutamente recomendable. "`
    },
];

let testimonio = document.querySelector(".testimonio");
let contTestimonio = 0;

testimonio.innerHTML = `
<img src="multimedia/testimonios/${testimonios[contTestimonio].imagen}"/>
<p>${testimonios[contTestimonio].estrellas}</p>
<h3>${testimonios[contTestimonio].nombre}</h3>
<p><i class="italic">${testimonios[contTestimonio].texto}</i></p>
`;


let derecha = document.querySelector(".flechaDer");
let izquierda = document.querySelector(".flechaIzq");

derecha.addEventListener("click", () => {

    contTestimonio++;

    console.log(contTestimonio);
    if(contTestimonio == testimonios.length){
        contTestimonio = 0;
        console.log(contTestimonio);
    }

    testimonio.style.opacity = 0;

    setTimeout(() => {
        testimonio.innerHTML = `
        <img src="multimedia/testimonios/${testimonios[contTestimonio].imagen}"/>
        <p>${testimonios[contTestimonio].estrellas}</p>
        <h3>${testimonios[contTestimonio].nombre}</h3>
        <p><i class="italic">${testimonios[contTestimonio].texto}</i></p>
        `;

        testimonio.style.opacity = 1;

    }, 500);


});

izquierda.addEventListener("click", () => {

    contTestimonio--;

    console.log(contTestimonio);

    if(contTestimonio == -1){
        contTestimonio = testimonios.length - 1;
        console.log(contTestimonio);
    }
    
    testimonio.style.opacity = 0;

    setTimeout(() => {
        testimonio.innerHTML = `
        <img src="multimedia/testimonios/${testimonios[contTestimonio].imagen}"/>
        <p>${testimonios[contTestimonio].estrellas}</p>
        <h3>${testimonios[contTestimonio].nombre}</h3>
        <p><i class="italic">${testimonios[contTestimonio].texto}</i></p>
        `;

        testimonio.style.opacity = 1;

    }, 500);

});