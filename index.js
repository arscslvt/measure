const home = document.getElementById("home");

home.addEventListener("click", function(){
    document.location.replace("index.html");
})

newNoti();

const infoTitle = document.getElementById("infoTitle");
const infoButton = document.getElementById("goTo");

infoTitle.innerHTML = "Hey, qui non avrai bisogno di Flash Player!";

const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");

nav1.addEventListener("click", navpage1);
infoButton.addEventListener("click", navpage1);

function navpage1(){
    document.body.style.animation = "fadeOut 0.5s ease";
    setTimeout(function(){document.location.replace("menu.html")}, 300);
}
