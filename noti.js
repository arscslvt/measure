function newNoti(title, snip){
    var noti = document.createElement("div");

    noti.classList = "noti";

    var notiTitle = document.createElement("p");
    var notiText = document.createElement("p");

    noti.appendChild(notiTitle);
    noti.appendChild(notiText);

    notiTitle.innerHTML = title;
    notiText.innerHTML = snip;

    document.body.appendChild(noti);
    noti.style.display = "initial";

    setTimeout(function(){
        noti.style.animation = "fadeOut 0.3s ease";
        setTimeout(function(){
            noti.style.display = "none";
            document.body.removeChild(noti);
        },300)
    }, 6000);

    console.log(noti);
}
