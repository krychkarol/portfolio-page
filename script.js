window.onscroll = function () {
    let aboutSection = isScrolledIntoView(document.getElementById("aboutAnimate"));
    let skillsSection = isScrolledIntoView(document.getElementById("skillsAnimate"));

    //ABOUT ANIMATION TRIGGER
    if(aboutSection){
        about.classList.add('animate');
        aboutQuote.classList.add('animate');
        aboutAboutme.classList.add('animate');
        for(let i = 0; i < aboutHTML.length; i++){
            aboutHTML[i].classList.add('animate');
        }
    }

    //SKILLS ANIMATION TRIGGER
    if(skillsSection){
        skills.classList.add('animate');
        skillsSkillsBoxes.classList.add('animate');
        for(let i = 0; i < skillsHTML.length; i++){
            skillsHTML[i].classList.add('animate');
        }
    }

};

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}

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

let x = document.getElementById('home-animationSlideIn');
for(let i = 0; i < x.children.length; i++){
    if(x.children[i].localName === "span"){
        x.children[i].style.animationDelay = ((i * 0.07) + "s")
    }
}

//ABOUT ANIMATION

let about = document.getElementById('about-animationLeftToRight');

for(let i = 0; i < about.children.length; i++){
    if(about.children[i].localName === "span"){
        about.children[i].style.animationDelay = ((i * 0.07) + "s");
    }
}

let aboutHTML = document.getElementsByClassName('aboutHTML');
let aboutQuote = document.getElementById('aboutQuote');
let aboutAboutme = document.getElementById('aboutAboutme');

//SKILLS ANIMATION

let skills = document.getElementById('skills-animationLeftToRight');

for(let i = 0; i < skills.children.length; i++){
    if(skills.children[i].localName === "span"){
        skills.children[i].style.animationDelay = ((i * 0.07) + "s");
    }
}

let boxes = document.getElementById('skillsSkillsBoxes');

for(let i = 0; i < boxes.children.length; i++){
    if(boxes.children[i].localName === "div"){
        boxes.children[i].style.animationDelay = ((i * 0.4) + "s");
    }
}

let skillsHTML = document.getElementsByClassName('skillsHTML');
let skillsSkillsBoxes = document.getElementById('skillsSkillsBoxes');