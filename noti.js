function newNoti(){
    var noti = document.createElement("div");

    noti.classList = "noti";

    var notiTitle = document.createElement("p");
    var notiText = document.createElement("p");

    noti.appendChild(notiTitle);
    noti.appendChild(notiText);

    notiTitle.innerHTML = "TEST";
    notiText.innerHTML = "TEST TEST";

    console.log(noti);
}
