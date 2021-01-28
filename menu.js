const home = document.getElementById("home");

home.addEventListener("click", function(){
    document.location.assign("index.html");
})

document.getElementById("boxButton1").addEventListener("click", function(){
    document.body.style.animation = "fadeOut 0.5s ease";
    setTimeout(function(){document.location.assign("cal_ventesimale.html")}, 300);
})