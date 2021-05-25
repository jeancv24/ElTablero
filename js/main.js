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
        document.getElementById("hamburgerButton").style.position = "absolute";
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        $openedNav=false;
    }else{
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementById("mySidebar").style.width = "350px";
        document.getElementById("hamburgerButton").style.position = "fixed";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        $openedNav=true;
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
    btnpopup.setAttribute('href', 'index.html');
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