//header
//animacion del boton de menu de hamburguesa
function buttonAnimation(x) {
    x.classList.toggle("change");
}

//funcion para abrir el menu de hamburguesa
$openedNav=false;
function sideNav(){
    if($openedNav){
        document.getElementById("mySidebar").style.width = "0";
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        $openedNav=false;
    }else{
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementById("mySidebar").style.width = "350px";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        $openedNav=true;
    }
}

//buscador
//abre y cierra el buscador
$openedBuscador=false;
$(function(){
    $(document).on("click",function(e) {//cierra el buscador al presionar fuera de él
    var container = $("#buscadorList");       
            if (!container.is(e.target) && container.has(e.target).length === 0 && $openedBuscador) { 
                document.getElementById("buscadorList").classList.toggle("show");//oculta el buscador
                document.getElementsByTagName("html")[0].style.overflow = "auto";//activa el scroll
                $openedBuscador=false;
            }
    });
    $("#buscarBtn").on("click", function(event){//abre el buscador al presionar el boton
        if(!$openedBuscador){
            document.getElementById("buscadorList").classList.toggle("show");//muestra el buscador
            $openedBuscador=true;
            event.stopImmediatePropagation();
            window.scroll({//mueve el scroll hasta el buscador
                top: 0,
                behavior: 'smooth'
            });
            document.getElementsByTagName("html")[0].style.overflow = "hidden";//desactiva el scroll
        }
    });
});


//filtra para mostrar lo que coincide con lo buscado
function buscadorFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("buscadorInput");
    filter = input.value.toUpperCase();//no hace diferencia entre mayusculas y minusculas
    div = document.getElementById("buscadorList");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {//recorre y compara cada "a" con la busqueda
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

//pop up de la pagina de confirmacion
function mostrarCubiertaEmergente(){
    //da un fondo oscuro al resto de la pagina
    let divEmergente = document.createElement('div');
    divEmergente.setAttribute('id', 'divEmergente');
    divEmergente.setAttribute('class', 'cubierta-emergente');
    document.body.appendChild(divEmergente);

    //crea el boton para volver al inicio
    let btnpopup = document.createElement('a');
    let btnMensaje = document.createTextNode('Volver al inicio');
    btnpopup.setAttribute('class', 'big-btn');
    btnpopup.setAttribute('href', 'index.php');
    btnpopup.appendChild(btnMensaje);
    
    //crea una etiqueta de tipo p
    let p_emergente = document.createElement('p');
    let textoDivMensaje = document.createTextNode('Su registro se ha realizado con exito en el torneo.');
    p_emergente.appendChild(textoDivMensaje);
    p_emergente.setAttribute('class','p-emergente');

    //crea una estiqueta de tipo div que contiene el boton y el texto
    let divMensaje = document.createElement('div');
    divMensaje.appendChild(p_emergente);
    divMensaje.appendChild(btnpopup);
    divMensaje.setAttribute('id', 'divMensaje');
    divMensaje.setAttribute('class', 'mensaje-emergente');

    //mueve el scroll hasta donde se encuentra la ventana emergente
    window.scroll({
        top: 85,
        behavior: 'smooth'
    });

    //muestra la ventana emergente en pantalla
    document.body.appendChild(divMensaje);

    //if para cargar los estilos de la ventana emergente
    if(document.createStyleSheet) {
    document.createStyleSheet('./css/datailsPages.css');
    }
    else {
    var styles = "@import url(' ./css/datailsPages.css ');";
    var newSS=document.createElement('link');
    newSS.rel='stylesheet';
    newSS.href='data:text/css,'+escape(styles);
    document.getElementsByTagName("head")[0].appendChild(newSS);
    }
}

//verifica los datos ingresados
$nameErrorShown = false;//se muestra el error del nombre
$emailErrorShown = false;//se muestra el error del email
$cantidadErrorShown = false;//se muestra el error de la cantidad
function checkForm() {

    let hasErrors;

    let name = document.getElementById('nombreCompleto');
    if (validator.isEmpty(name.value)) {//verifica el nombre
        console.log("not an name");
        name.classList.add("error");//añade el error
        let msg = document.createElement("span");//crea el span de error
        msg.innerHTML = "Debe ingresar un nombre.";
        msg.setAttribute('class','error_msg');
        if(!$nameErrorShown){
            showErrorMsg(name, msg);//muestra el mensaje de error
            $nameErrorShown = true;
        }
        hasErrors = true;
    }else if($nameErrorShown){
        hideError(name, $nameErrorShown);//oculta el mensaje de error
        $nameErrorShown = false;
    }

    let email = document.getElementById('correoElectronico');
    if (!validator.isEmail(email.value)) {//verifica el email
        console.log("not an email");
        email.classList.add("error");//añade el error
        let msg = document.createElement("span");//crea el span de error
        msg.innerHTML = "Debe ingresar un correo electronico.";
        msg.setAttribute('class','error_msg');
        if(!$emailErrorShown){
            showErrorMsg(email, msg);//muestra el mensaje de error
            $emailErrorShown = true;
        }
        hasErrors = true;
    }else if($emailErrorShown){
        hideError(email, $emailErrorShown);//oculta el mensaje de error
        $emailErrorShown = false;
    }

    let cantidad = document.getElementById('cantidadCampos');
    if (!validator.isNumeric(cantidad.value)) {//verifica la cantidad
        console.log("not a number");
        cantidad.classList.add("error");//añade el error
        let msg = document.createElement("span");//crea el span de error
        msg.innerHTML = "Debe ingresar un número.";
        msg.setAttribute('class','error_msg');
        if(!$cantidadErrorShown){
            showErrorMsg(cantidad, msg);//muestra el mensaje de error
            $cantidadErrorShown = true;
        }
        hasErrors = true;
    }else if($cantidadErrorShown){
        hideError(cantidad, $cantidadErrorShown);//oculta el mensaje de error
        $cantidadErrorShown = false;
    }

    if (hasErrors) {//da respuesta a si hay un error
        return false;
    } else { 
        return true;
    }
};

function showErrorMsg(referenceNode, newNode) {//metodo que muestra el error en pantalla
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function hideError(el, shownError) {//oculta el error
    el.classList.remove("error");
    if (el.nextElementSibling !== null && shownError) {
        el.nextElementSibling.remove();
    }
}



//funcion que muestra el rectangulo negro al bajar
$documentWidth=0;
$(window).scroll(function(){
    window_y = $(window).scrollTop();//maneja cuanto se ha hecho de scroll
    scroll_critical = parseInt($("header").height());//es el punto en el que aparecera el cuadro
    let square = document.getElementById("hiddenSquare");//obtiene el cuadro
    if (window_y > scroll_critical) {
        $(document).ready(function(){//obtiene el ancho de la pagina para que no funcione en desktop
            $documentWidth=$('body').width();
        })
        if($documentWidth < 600){
            square.style.display = "block";//lo muestra
        }else{
            square.style.display = "none";//lo coulta
        }
    } else {
        square.style.display = "none";//lo oculta
    }
});