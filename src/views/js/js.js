setTimeout(() => {
    $('#loader').fadeOut(1000, function(){
        $('#loader').addClass("hide");
    });
}, 0001);
if (localStorage.getItem("app")==="false") {
    x.style.display = 'none';
}
//Abrir app
function huella(){
    var x = document.getElementById('execute');    
    localStorage.setItem("app","true");
    console.log(localStorage.getItem("app"));

    if(localStorage.getItem("app")==="true"){
        setTimeout(function(){ $(".execute").addClass("magicUP");}, 0001);
        setTimeout(function(){ $(".execute").removeClass("magicUP"); }, 1000);
        x.style.display = 'block';
    }else{
        x.style.display = 'none';
    }
}

//ocultar
function ocultar() {
    var x = document.getElementById('execute');
    if (x.style.display === 'block') {
        setTimeout(function(){ $(".execute").addClass("magic"); }, 0001);
        setTimeout(function(){ $(".execute").removeClass("magic"); }, 1000);
        setTimeout(function(){ x.style.display = 'none';}, 1000);
        localStorage.setItem("app","false");
        console.log(localStorage.getItem("app"));
    }else {
        x.style.display = 'none';
    }
}
function ocultar2() {
    var x = document.getElementById('execute2');
    if (x.style.display === 'block') {
        setTimeout(function(){ $(".ventana-abierta").addClass("magic"); }, 0001);
        setTimeout(function(){ $(".ventana-abierta").removeClass("magic"); }, 1000);
        setTimeout(function(){ x.style.display = 'none';}, 1000);
        localStorage.setItem("app","false");
        console.log(localStorage.getItem("app"));
        
        localStorage.setItem("ventanas","false");
        console.log(localStorage.getItem("ventanas"));
    }else {
        x.style.display = 'none';
    }
}

//ventanas
function ventanas(){
    var x = document.getElementById('execute'); 
    setTimeout(function(){ $(".execute").addClass("magicUP");}, 0001);
    setTimeout(function(){ $(".execute").removeClass("magicUP"); }, 1000);
    localStorage.setItem("ventanas","true");
    console.log(localStorage.getItem("ventanas"));
    x.style.display = 'block';
}
var x = document.getElementById('execute');
if(localStorage.getItem("ventanas")==="true"){
    x.style.display = 'block';
}else{}



//Save name
function saveNombre(){
    $(document).ready(function (){
        $('#nombre').on('keyup', function(){
                var valor = $('#nombre').val();
                $('#reflejar').text(valor);
                localStorage.setItem("nombres",valor);
                console.log(localStorage.getItem("nombres"));
                //$('#campo').val("Hola mundo");
            });
        });
}