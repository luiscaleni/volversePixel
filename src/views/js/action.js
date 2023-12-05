const root = document.getElementById("root");
const contFS = document.getElementById("contFS");
const movilContent = document.getElementById("movil");
const play = document.getElementById("play");
const contQR = document.getElementById("contentQR");


setTimeout(() => {
    $('#screenLoader').fadeOut(300, function(){
        $('#screenLoader').addClass("hide");
    });
}, 4000);


setTimeout(() => {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        console.log("Estás usando un dispositivo móvil!!");
    } else {
        setTimeout(() => {
            contQR.style.display="flex";
        }, 3000);
        root.removeChild(contFS);
        root.removeChild(movilContent);
        console.log("No estás usando un móvil");
    }
}, 0);