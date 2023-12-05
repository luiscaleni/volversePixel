import vision from "./localCDN.js";
const { FaceLandmarker, FilesetResolver, DrawingUtils } = vision;
let faceLandmarker;
let runningMode;
let enableWebcamButton;
let appScreen;
let webcamRunning = false;
let valueId = undefined;
const videoWidth = 720;
const vsh = "auto";
const root = document.getElementById("root");
const buttonTyC = document.getElementById("buttonTyC");
const videoProgressBar = document.getElementById("videoProgressBar");
const screenPlay = document.getElementById("screenPlay");
const localVideo = document.getElementById("localVideo");
const contPositionMsg = document.getElementById("contPositionMsg");
const msg1 = document.getElementById("msg1");
const msg2 = document.getElementById("msg2");
const msg3 = document.getElementById("msg3");
const msg4 = document.getElementById("msg4");
const msg5 = document.getElementById("msg5");

let playVideo;
const video = document.getElementById("webcam");
const canvasElement = document.getElementById("outputCanvas");
const canvasCtx = canvasElement.getContext("2d");

const alertSound = document.createElement("audio");
const contMsg = document.getElementById("contMsg");
const messageAlert = document.getElementById("messageAlert");
const notificationSound = document.createElement("audio");
let reaction1;
let reaction2;
let reaction3;
let dato3=undefined;
let dato1=undefined;
let dato2=undefined;
let text="Por ejemplo vos ";

alertSound.src="src/views/assets/audios/alertSound.mp3";
notificationSound.src="src/views/assets/audios/notificationSound.mp3";
notificationSound.preload="auto";

let lastVideoTime = -1;
let results = undefined;
const drawingUtils = new DrawingUtils(canvasCtx);

const text1 = document.createElement("p");
const alert = document.createElement("p");
const text3 = document.createElement("p");
const contText4 = document.createElement("div");
const text5 = document.createElement("p");

text1.textContent="Usted ha sido monitoreado durante la visualización de este video.";
//text2 = alert;
text3.textContent="Estamos seguros de que no leyó los términos y condiciones que aceptó al inicio. Esto nos hablita a vender su información.";
contText4.innerHTML="<p>Esto es:<span class='volversePIXEL'>volversePIXEL</span> un proyecto que PROMUEVE LA SALUD DIGITAL Y FÍSICA mostrando de manera explícita la enajenación a la tecnología que consumimos y sus consecuencias.</p>";
text5.textContent="Los datos capturados se eleminarán de forma automática en unos segundos. Gracias por participar.";

//
async function createFaceLandmarker() {
    const filesetResolver = await FilesetResolver.forVisionTasks("./src/views/js/node_modules/@mediapipe/tasks-vision/wasm");
    faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
            modelAssetPath: `./src/views/js/face_landmarker.task`,
            delegate: "GPU"
        },
        numFaces: 1,
        runningMode: "VIDEO",
        outputFaceBlendshapes: true
    });
    
}
createFaceLandmarker();

buttonTyC.addEventListener("click", function(){
    enableCam();
    navigator.wakeLock.request('screen');
    root.removeChild(contFS);
});


function pasarPantallaCompleta(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
        localVideo.volume = 0.8;
        localVideo.play();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        localVideo.volume = 0.8;
        localVideo.play();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
        localVideo.volume = 0.8;
        localVideo.play();
    }
}

function hasGetUserMedia() {
    return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

    if (hasGetUserMedia()) {
        enableWebcamButton = document.getElementById("webcamButton");
        appScreen = document.getElementById("appScreen");
        enableWebcamButton.addEventListener("click", function(){
            screenPlay.style.display="none";
            pasarPantallaCompleta(document.documentElement);
            playVideo = "play";
            videoProgressBar.style.display="block";

            setTimeout(function(){
                appScreen.style.display = "none";
                localVideo.style.display="none";
                canvasElement.style.zIndex="10";
                notification.style.display="flex";
                notification.style.animation="showData 2s linear";
                showData();
            },33000);
            
            setTimeout(function(){
                borrarStorage();
                window.location.reload();
            },70000);
        });
    }else {
        console.warn("getUserMedia() no es compatible con su navegador.");
    }

function enableCam(event) {
    if (!faceLandmarker) {
        console.log("¡Esperar! faceLandmarker aún no está cargado.");
        return;
    }
    if (webcamRunning === true) {
        webcamRunning = false;
    }else {
        webcamRunning = true;
    }
    
    const constraints = {
        video: true
    };
    
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        video.srcObject = stream;
        video.addEventListener("loadeddata", predictWebcam);
    }).catch(function(err){
        if (err.name == "NotAllowedError") {
            window.location.reload();        
        }
      });
}
let errorOne = 0;
async function predictWebcam(){
    video.style.width = videoWidth + "px";
    video.style.height = vsh;
    canvasElement.style.width = videoWidth + "px";
    canvasElement.style.height = vsh;
    canvasElement.width = video.videoWidth;
    canvasElement.height = video.videoHeight;
    
    if (runningMode === "VIDEO") {
        await faceLandmarker.setOptions({ runningMode: runningMode });
    }

    let startTimeMs = performance.now();
    if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;
        results = faceLandmarker.detectForVideo(video, startTimeMs);
    }
    if (results.faceLandmarks) {
        if(results.faceLandmarks.length !== 0){       
            for (const landmarks of results.faceLandmarks) {
                if(valueId===1){
                    setTimeout(function(){
                        messageAlert.style.display="none";
                        valueId = 0;
                    }, 4000);   
                }

                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_FACE_OVAL, { color: "#696969"});

                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_TESSELATION, { color: "#FFFFFF", lineWidth: 1 });

                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW, { color: "#333333" });
                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_EYE, { color: "#636363" });
                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS, { color: "#636363" });

                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW, { color: "#333333" });
                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE, { color: "#636363" });
                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS, { color: "#636363" });
                
                drawingUtils.drawConnectors(landmarks, FaceLandmarker.FACE_LANDMARKS_LIPS, { color: "#FFFFFF" });       
            }
        }else{
            errorOne++;
            
            if (errorOne > 2 && playVideo === "play") {
                console.log("No hay captura del rostro");
                console.log(playVideo);
                window.navigator.vibrate([100,0,100]);
                messageAlert.style.display="flex";
                alertSound.play();
                valueId = 1;
            }
        }
    }

    blendShapes(results.faceBlendshapes);
    
    if (webcamRunning === true) {
        window.requestAnimationFrame(predictWebcam);
    }
}

function blendShapes(blendShapes) {
    if (!blendShapes.length) {
        return;
    }

    
    blendShapes[0].categories.map((shape) => {
        if(shape.categoryName === "eyeSquintLeft" && shape.score > "0.65"){
            reaction1 = "te ASUSTASTE ";
            localStorage.setItem("reaction1", reaction1);
        }else if(shape.categoryName === "browOuterUpLeft" && shape.score > "0.98"){
            reaction2 = "te ASOMBRASTE ";
            localStorage.setItem("reaction2", reaction2);
        }else if (shape.categoryName === "mouthSmileRight" && shape.score > "0.5") {
            reaction3 = "te REISTE ";
            localStorage.setItem("reaction3", reaction3);
        }
    });
}

function showData(){
    if (reaction1 !== undefined) {
        dato1 = reaction1;
    }else{
        dato1 = "";
    }

    if(reaction2 !== undefined){
        dato2 = reaction2;
    }else{
        dato2 = "";
    }

    if(reaction3 !== undefined){
        dato3 = reaction3;
    }else{
        dato3 = "";
    }

    if(reaction1 !== undefined && reaction2 === undefined && reaction3 === undefined){ //solo 1
        alert.textContent= text + dato1 + " como el 17% de los usuarios que participaron.";

    }else if(reaction1 === undefined && reaction2 !== undefined && reaction3 === undefined){//solo 2
        alert.textContent= text + dato2 + " como el 34% de los usuarios que participaron.";

    }else if(reaction1 === undefined && reaction2 === undefined && reaction3 !== undefined){//solo 3
        alert.textContent= text + dato3 + " como el 17% de los usuarios que participaron.";

    }else if(reaction1 !== undefined && reaction2 !== undefined && reaction3 === undefined) {//solo 1 y 2
        alert.textContent= text + dato1 + " y " + dato2 + " como el 51% de los usuarios que participaron.";

    }else if(reaction1 === undefined && reaction2 !== undefined && reaction3 !== undefined){//solo 2 y 3
        alert.textContent= text + dato2 + " y " + dato3 + " como el 51% de los usuarios que participaron.";

    }else if (reaction1 !== undefined && reaction2 === undefined && reaction3 !== undefined) {//solo 1 y 3
        alert.textContent= text + dato1 + " y " + dato3 + " como el 51% de los usuarios que participaron.";
        
    }else if(reaction1 !== undefined && reaction2 !== undefined && reaction3 !== undefined){//solo 1,2 y 3
        alert.textContent= text + dato1 + ", " + dato2 + "y " + dato3 + " como el 10% de los usuarios que participaron.";

    }else if(reaction1 === undefined && reaction2 === undefined && reaction3 === undefined){
        alert.textContent= text + "NO tuviste ninguna reacción. Eso es muy sorprendente.";
    }else{
        alert.textContent="El mal uso puede provocar accidentes. Al 17% de los usuarios que testeamos les pareció gracioso.";
    }

    //Muestro text1
    videoProgressBar.style.display="none";
    contPositionMsg.style.display="flex";

    msg1.style.backgroundColor ="#FFC107";
    msg1.style.transform="scale(2)";
    contMsg.appendChild(text1);
    window.navigator.vibrate([100,0,100]);
    notificationSound.play();

    setTimeout(function(){ //Muestro alert - Reaccion
        text1.style.display="none";
        msg2.style.backgroundColor ="#FFC107";
        msg2.style.transform="scale(2)";
        contMsg.appendChild(alert);
        notificationSound.play();
    }, 5000);

    setTimeout(function(){ //Muestro text3 - TyC
        alert.style.display="none";//Elimino la reaccion
        msg3.style.backgroundColor ="#FFC107";
        msg3.style.transform="scale(2)";
        contMsg.appendChild(text3); //Agrego texto TyC
        notificationSound.play();
    }, 11000);

    setTimeout(function(){ //Muestro texto4 - volversePIXEL
        text3.style.display="none"; //Elimino Text3
        msg4.style.backgroundColor ="#FFC107";
        msg4.style.transform="scale(2)";
        contMsg.appendChild(contText4); //Agrego volversePIXEL
        notificationSound.play();
    }, 19000);

    setTimeout(function(){ //Muestro texto4 - volversePIXEL
        contText4.style.display="none";//Elimino contText4
        msg5.style.backgroundColor ="#FFC107";
        msg5.style.transform="scale(2)";
        contMsg.appendChild(text5); //Agrego volversePIXEL
        notificationSound.play();
    }, 30000);
    borrarStorage();
}

function borrarStorage(){
    if (localStorage.getItem("reaction1")) {
        localStorage.removeItem("reaction1");
    }
    if (localStorage.getItem("reaction2")) {
        localStorage.removeItem("reaction2");
    }
    if (localStorage.getItem("reaction3")) {
        localStorage.removeItem("reaction3");
    }
};

borrarStorage();
