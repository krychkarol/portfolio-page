//NAVBAR
document.getElementById("open-menu").addEventListener("click", toggleMenu);
document.getElementById("close-menu").addEventListener("click", toggleMenu);
let dropdownItems = document.getElementsByClassName("option-dropdown");
for (let i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener("click", toggleMenu);
}

function toggleMenu() {
    let menu = document.getElementById("dropdown-menu");
    let open = document.getElementById("open-menu");
    let close = document.getElementById("close-menu");

    if(menu.style.display === "flex"){
        menu.style.display = "none";
        open.style.display = "flex";
        close.style.display = "none";
    }
    else if(menu.style.display ===  ""){
        menu.style.display = "flex";
        open.style.display = "none";
        close.style.display = "flex";
    }
    else if(menu.style.display ===  "none"){
        menu.style.display = "flex";
        open.style.display = "none";
        close.style.display = "flex";
    }
}

//HOME ANIMATION

let x = document.getElementById('animationSlideIn');
for(let i = 0; i < x.children.length; i++){
    if(x.children[i].localName === "span"){
        x.children[i].style.animationDelay = ((i * 0.07) + "s")
    }
}