const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll("nav a");
const homeLogo = document.getElementById("homeLogo");
const projectCards = document.querySelectorAll(".project-card");
const btnBacks = document.querySelectorAll(".btnBack");

const loader = document.getElementById("loader");

let animating = false;


/* =========================
   LOADER INIZIALE
========================= */

window.addEventListener("load", ()=>{

    setTimeout(()=>{

        loader.classList.add("hide");

        showPage("hero");

    },2200);

});



function showPage(id){

    if(animating) return;

    animating = true;


    pages.forEach(page=>{

        page.classList.remove("active");

    });


    setTimeout(()=>{

        document.getElementById(id).classList.add("active");

        animating=false;


    },300);

}



/* MENU */

links.forEach(link=>{

    link.onclick=()=>{

        showPage(link.dataset.page);

    };

});



/* LOGO */

homeLogo.onclick=()=>{

    showPage("hero");

};




/* BUTTONS HERO / ABOUT */

document.getElementById("btnHero").onclick=()=>{

    showPage("about");

};



document.getElementById("btnEnter").onclick=()=>{

    showPage("final");

};




/* PROJECT CARDS CLICK */

projectCards.forEach(card=>{


    card.onclick=()=>{


        showPage(card.dataset.project);


    };


});





/* BACK BUTTONS */

btnBacks.forEach(btn=>{


    btn.onclick=()=>{


        showPage("final");


    };


});
