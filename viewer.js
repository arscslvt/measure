const home = document.getElementById("home");

home.addEventListener("click", function(){
    document.location.assign("menu.html");
})

var leftSlider = document.getElementById("leftSlider");
var rightSlider = document.getElementById("rightSlider");

const lenght = document.getElementById("lenght");

rightSlider.style.left = "213px";

var minPos = 212;
var maxPos = 858;
var currentPos;
var limit = false;
var simoneWidth = 0;

var mousePosition;
var offset = [0,0];
var isDown = false;

rightSlider.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        rightSlider.offsetLeft - e.clientX,
    ];
    currentPos = e.clientX;
    console.log("down: ", currentPos);
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    var xPos = rightSlider.style.left.slice(0, -2);
    event.preventDefault();
    if(event.clientX > minPos + simoneWidth && event.clientX < maxPos){
        limit = false;
    }
    if(xPos >= minPos + simoneWidth && xPos <= maxPos){
        if (isDown && limit == false) {
            mousePosition = {
                x : event.clientX,
            };
            rightSlider.style.left = (mousePosition.x + offset[0]) + 'px';

            currentPos = event.clientX;
            if(xPos <= minPos){
                rightSlider.style.left = (minPos+1).toString() + 'px';
                xPos = minPos + 1;
            }
            console.log("move: ", currentPos);
        }
        lenght.innerHTML = ((((xPos - 213)/33.505850)+ 0.75)*10).toFixed(2);
        console.log(lenght.innerHTML);
    }else if(xPos <= minPos + simoneWidth){
        if(simoneWidth>0){
            rightSlider.style.left = (minPos + 63).toString() + 'px';
            limit = true;
        }else{
            limit = true;
            rightSlider.style.left = (minPos + 1) + 'px';
        }
        xPos = minPos + simoneWidth;
    }else if(xPos >= maxPos + 1){
        rightSlider.style.left = maxPos.toString() + 'px';
        xPos = maxPos;
        limit = true;
    }

    console.log("simo:", simoneWidth);
    
}, true);

const simone = document.getElementById("bullone");

simone.addEventListener("click", function(){
    var bullone = document.createElement("div");
    bullone.classList = "bullone";

    document.getElementsByClassName("viewer")[0].appendChild(bullone);
    
    console.log(bullone.style.width);

    simoneWidth = 63;
    // bullone.style.background = "url('assets/simone.svg')";
    // bullone.style.width = "200px";
    // bullone.style.height = "200px";
})
