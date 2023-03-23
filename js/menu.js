let cajaMenu = document.querySelector(".inicio--menu");
let menu = cajaMenu.querySelector("ul");
let menuMovil = document.querySelector(".menuMovil");
let logo = document.querySelector(".logoFijo");
let cajaMovil = document.querySelector(".inicioMovil");
let clickMenu = false;

document.addEventListener("scroll", () =>{

    if(window.scrollY >= window.innerHeight){

        if(clickMenu == false){

            if(window.innerWidth <= 540){
                menuMovil.style.right = "20px";
            }else{
                menuMovil.style.right = "50px";
            }

        }else{
            menuMovil.style.right = "123px";
        }
        
        if(window.innerWidth <= 540){
            menuMovil.style.right = "20px";
            logo.style.top = "0px";
            logo.style.left = "0px";
            cajaMovil.style.position = "fixed";
            cajaMovil.style.top = "0px";
            menuMovil.style.top = "20px";

        }else{
            logo.style.top = "30px";
            logo.style.left = "0px";
            menuMovil.style.top = "50px";

        }


    }else{
        menuMovil.classList.remove("fa-xmark");
        menuMovil.classList.add("fa-bars");

        if(window.innerWidth <= 540){
            menuMovil.style.backgroundColor = "transparent";
            menuMovil.style.boxShadow = "none";
        }else{
            menuMovil.style.backgroundColor = "#2F2719";
            menuMovil.style.boxShadow = "inset 0px -5px 1px 1px #573a1d, 0px 3px 1px 1px black, 0px -1px 1px 1px black";        
        }
        
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
        cajaMovil.style.top = "-100px";

    }
})

menuMovil.addEventListener("click" , () =>{

    if(clickMenu == false){
        if(window.innerWidth <= 540){
            cajaMenu.style.width = "100%";
            menuMovil.style.right = "20px";
        }else{
            cajaMenu.style.width = "300px";
            menuMovil.style.right = "123px";
        }
        menuMovil.style.backgroundColor = "transparent";
        menuMovil.style.boxShadow = "none";
        menuMovil.classList.remove("fa-bars");
        menuMovil.classList.add("fa-xmark");
        cajaMenu.style.opacity = "0.8";
        cajaMenu.style.position = "fixed";
        cajaMenu.style.top = "0";
        cajaMenu.style.right = "0";
        cajaMenu.style.height = "100vh";
        menu.style.position = "relative";
        menu.style.top = "125px";
        menu.style.right = "0";
        cajaMenu.style.backgroundColor = "black";
        clickMenu = true;
    }else{
        if(window.innerWidth <= 540){
            menuMovil.style.right = "20px";
        }else{
            menuMovil.style.right = "50px";
            menuMovil.style.boxShadow = "inset 0px -5px 1px 1px #573a1d, 0px 3px 1px 1px black, 0px -1px 1px 1px black";
            menuMovil.style.backgroundColor = "#2F2719";
        }        
        menuMovil.classList.remove("fa-xmark");
        menuMovil.classList.add("fa-bars");
        cajaMenu.style.opacity = "1";
        cajaMenu.style.position = "fixed";
        cajaMenu.style.top = "0";
        cajaMenu.style.right = "-100%";
        cajaMenu.style.width = "300px";
        cajaMenu.style.height = "100vh";
        menu.style.position = "relative";
        menu.style.top = "125px";
        menu.style.right = "0";
        clickMenu = false;
    }
    

});