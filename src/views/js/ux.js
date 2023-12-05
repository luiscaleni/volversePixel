const msgNavSound = document.createElement("audio");
const reloadOptionSound = document.createElement("audio");
reloadOptionSound.src="src/views/assets/audios/reloadOptionSound.mp3";
msgNavSound.src="src/views/assets/audios/msgNavSound.mp3";
const menu = document.getElementById("menu");
const home = document.getElementById("home");
const plus = document.getElementById("plus");
const menuUser = document.getElementById("menuUser");
//
const contMsgNav = document.getElementById("contMsgNav");
//
const alertHome = document.getElementById("alertHome");
const cancel = document.getElementById("cancel");


home.addEventListener("click",()=>{
  alertHome.style.display="flex";
  reloadOptionSound.play();
});


menu.addEventListener("click",()=>{
  contMsgNav.style.display="flex";
  msgNavSound.play();
  setTimeout(()=>{
    contMsgNav.style.display="none";
  },2000);
});

plus.addEventListener("click",()=>{
  contMsgNav.style.display="flex";
  msgNavSound.play();
  setTimeout(()=>{
    contMsgNav.style.display="none";
  },2000);
});

menuUser.addEventListener("click",()=>{
  contMsgNav.style.display="flex";
  msgNavSound.play();
  setTimeout(()=>{
    contMsgNav.style.display="none";
  },2000);
});

cancel.addEventListener("click",()=>{
  alertHome.style.display="none";
});