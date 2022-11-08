let burger = document.querySelector(".burger");
let menu = document.querySelector(".burger__menu");

let dropMenu = function(){
    if(menu.classList.contains("showMenu")){
        menu.classList.remove("showMenu");
    } else{
        menu.classList.add("showMenu");
    }
};

burger.addEventListener("click", dropMenu);