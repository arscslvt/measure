const home = document.getElementById("home");

home.addEventListener("click", function(){
    document.location.assign("index.html");
})

const infoTitle = document.getElementById("infoTitle");
const infoButton = document.getElementById("goTo");

infoTitle.innerHTML = "Hey, qui non avrai bisogno di <u>Flash Player</u>!";
infoButton.innerHTML = "Usa il calibro";

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");

nav1.addEventListener("click", navpage1);
infoButton.addEventListener("click", navpage1);

function navpage1(){
    document.body.style.animation = "fadeOut 0.5s ease";
    setTimeout(function(){document.location.assign("menu.html")}, 300);
}

const credits = document.getElementById("credits");

credits.addEventListener("click", function(){
    newNoti("Crediti", "<b>Programmatore e designer:</b> Aresco Salvatore <br><b>Editor:</b> Gabriele Foti<br><br>Tutte i contenuti e le immagini sono state realizzate da Salvatore Aresco. (Tutti i diritti riservati)");
})