let flechaArriba = document.querySelector(".flechaArriba");

flechaArriba.style.display = "none";


document.addEventListener("scroll", () => {

    if(window.pageYOffset > 200){
        flechaArriba.style.display = "block";
        flechaArriba.style.right = "50px";
    }else{
        flechaArriba.style.display = "block";
        flechaArriba.style.right = "-80px";
    }
});

flechaArriba.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    });
});
