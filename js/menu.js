let cajaMenu = document.querySelector(".inicio--menu");
let menu = cajaMenu.querySelector("ul");
let menuMovil = document.querySelector(".menuMovil");
let cerrarMenu = document.querySelector(".cerrarMenu");
let logo = document.querySelector(".logoFijo");

let clickMenu = false;

document.addEventListener("scroll", () =>{
    if(window.scrollY >= window.innerHeight){
        if(clickMenu == false){
            menuMovil.style.right = "50px";
        }else{
            menuMovil.style.right = "123px";
        }
        
        logo.style.top = "30px";
        logo.style.left = "0px";

    }else{
        menuMovil.classList.remove("fa-xmark");
        menuMovil.classList.add("fa-bars");
        menuMovil.style.backgroundColor = "#2F2719";
        menuMovil.style.boxShadow = "inset 0px -5px 1px 1px #573a1d, 0px 3px 1px 1px black, 0px -1px 1px 1px black";
        cajaMenu.style.opacity = "1";
        cajaMenu.style.position = "static";
        cajaMenu.style.width = "100%";
        cajaMenu.style.height = "100%";
        cajaMenu.style.backgroundColor = "#2F2719";
        menu.style.position = "static";
        menuMovil.style.right = "-80px";
        menu.style.justifyContent = "center";
        logo.style.left = "-120px";
        clickMenu = false;
    }
})

menuMovil.addEventListener("click" , () =>{

    if(clickMenu == false){
        menuMovil.style.right = "123px";
        menuMovil.style.backgroundColor = "transparent";
        menuMovil.style.boxShadow = "none";
        menuMovil.classList.remove("fa-bars");
        menuMovil.classList.add("fa-xmark");
        cajaMenu.style.opacity = "0.8";
        cajaMenu.style.position = "fixed";
        cajaMenu.style.top = "0";
        cajaMenu.style.right = "0";
        cajaMenu.style.width = "300px";
        cajaMenu.style.height = "100vh";
        menu.style.position = "relative";
        menu.style.top = "125px";
        menu.style.right = "0";
        cajaMenu.style.backgroundColor = "black";
        clickMenu = true;
    }else{
        menuMovil.style.right = "50px";
        menuMovil.style.backgroundColor = "#2F2719";
        menuMovil.style.boxShadow = "inset 0px -5px 1px 1px #573a1d, 0px 3px 1px 1px black, 0px -1px 1px 1px black";
        menuMovil.classList.remove("fa-xmark");
        menuMovil.classList.add("fa-bars");
        cajaMenu.style.opacity = "1";
        cajaMenu.style.position = "fixed";
        cajaMenu.style.top = "0";
        cajaMenu.style.right = "-300px";
        cajaMenu.style.width = "300px";
        cajaMenu.style.height = "100vh";
        menu.style.position = "relative";
        menu.style.top = "125px";
        menu.style.right = "0";
        clickMenu = false;
    }
    
});