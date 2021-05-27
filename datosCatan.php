<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Torneos de juegos de mesa.">
    <title>El Tablero</title>
    <link rel="shortcut icon" href="./imgs/logo_icon.png">
    <!-- Bootstrap link/version -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap" rel="stylesheet">
    <!-- main stylesheet -->
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/datailsPages.css">
</head>
<body>
    <div class="container-fluid">
        <!-- header -->
        <header>
            <!--menu de hamburguesa-->
            <div id="hamburgerButton" class="hamburger-container" onclick="buttonAnimation(this), sideNav()">
                <div class="hamburger bar1"></div>
                <div class="hamburger bar2"></div>
                <div class="hamburger bar3"></div>
            </div>
            <div id="mySidebar" class="sidebar">
                <img src="imgs/logo_simpre.png" alt="simple logo">
                <a href="detailsCatan.php">Catan</a>
                <a href="#">Carcassone</a>
                <a href="#">Stone Age</a>
                <a href="#">Scythe</a>
            </div>
            <!--menu de hamburguesa-->
            <div  class="row justify-content-center nav-container">
                <!-- nav -->
                <nav class="col-10">
                    <ul>
                        <li>
                            <a class="logo-container" href="index.php">
                                <img class="logo" src="imgs/logo_amplio.png" alt="main logo">
                            </a>
                        </li>
                        <li><a class="top-nav" href="detailsCatan.php">Catan</a></li>
                        <li><a class="top-nav" href="#">Carcassone</a></li>
                        <li><a class="top-nav" href="#">Stone Age</a></li>
                        <li><a class="top-nav" href="#">Scythe</a></li>
                    </ul>
                </nav>
                <!-- nav -->
                <!--buscar-->
                <section class="col-2">
                    <form action="#" method="POST">
                        <input id="busqueda" class="text-field" type="text" name="busqueda" placeholder="Buscar">
                        <input class="btn-buscar" type="submit" value="">
                    </form>
                </section>
                <!--buscar-->
            </div>
        </header>
        <!-- header -->
        <!-- ingreso de datos -->
        <div class="main-container">
            <!-- h1 title -->
            <img class="logo-catan" src="./imgs/catan_logo_sin fondo.png" alt="logo de Catan">
            <div class="row justify-content-center">
                <section class="col-10 datos-container">
                    <h1 class="row justify-content-center h1-title">Ingrese sus datos</h1>
                    <form class="row justify-content-center" action="./confirmacionCatan.php" method="POST" onsubmit="return checkForm(this);">
                        <input id="nombreCompleto" class="datos-text-field" type="text" name="nombreCompleto" placeholder="Nombre Completo">
                        <input id="correoElectronico" class=" datos-text-field" type="text" name="correoElectronico" placeholder="Correo Electronico">

                        <div class="row justify-content-center container-switch">
                            <p class="p-datos adulto">Adulto</p>
                            <label class="switch">
                                <input type="checkbox">
                                <span class="slider"></span>
                            </label>
                            <p class="p-datos nino">Niño</p>
                        </div>
                        
                        <input class="big-btn" type="submit" value="Aceptar">
                    </form>
                </section>
            </div>
        </div>
        <!-- ingreso de datos -->
        <!-- footer -->
            <footer>
                <img class="footer-logo" src="imgs/logo_simpre.png" alt="simple logo">
                <div class="row justify-content-center">
                    <p class="footer-p col-1">Copyright 2021</p>
                </div>
                <div class="row justify-content-center">
                    <p class="footer-p col-2">All rights reserved</p>
                </div>
            </footer>
        <!-- footer -->
    </div>
    <script src="./js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/validator/13.1.1/validator.min.js"></script>
</body>
</html>