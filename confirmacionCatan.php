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
    <!-- libreria para el buscador -->
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
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
                <a href="detailsCatan.php">Carcassone</a>
                <a href="detailsCatan.php">Stone Age</a>
                <a href="detailsCatan.php">Scythe</a>
            </div>
            <!--menu de hamburguesa-->
            <div id="hiddenSquare" class="black-square">
                <a href="index.php">
                    <img class="hidden-logo" src="imgs/logo_simpre.png" alt="simple logo">
                </a>
            </div>
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
                        <li><a class="top-nav" href="detailsCatan.php">Carcassone</a></li>
                        <li><a class="top-nav" href="detailsCatan.php">Stone Age</a></li>
                        <li><a class="top-nav" href="detailsCatan.php">Scythe</a></li>
                    </ul>
                </nav>
                <!-- nav -->
                <!--buscar-->
                <section class="col-1">
                    <div class="container-buscador">
                        <button id="buscarBtn" class="btn-buscar">Buscar</button>
                        <div id="buscadorList" class="buscador-content">
                            <input type="text" placeholder="Buscar..." id="buscadorInput" onkeyup="buscadorFunction()">
                            <a href="detailsCatan.php">Catan</a>
                            <a href="detailsCatan.php">Carcassone</a>
                            <a href="detailsCatan.php">Stone Age</a>
                            <a href="detailsCatan.php">Scythe</a>
                            <a href="detailsCatan.php">Dice Forge</a>
                            <a href="detailsCatan.php">Azul</a>
                            <a href="detailsCatan.php">Ticket to Ride</a>
                            <a href="detailsCatan.php">Dead of Winter</a>
                            <a href="detailsCatan.php">The Island</a>
                            <a href="detailsCatan.php">Potion Explosion</a>
                        </div>
                    </div>
                </section>
                <!--buscar-->
            </div>
        </header>
        <!-- header -->
        <!-- informacion del registro -->
        <div class="main-container">
            <!-- h1 title -->
            <img class="logo-catan" src="./imgs/catan_logo_sin fondo.png" alt="logo de Catan">
            <div class="row justify-content-center">
                <section class="col-10 text-container">
                    <h1 class="row justify-content-center h1-title">Confirme su registro</h1>
                    <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Conferam tecum, quam cuique verso rem subicias; Scaevolam M. Duo Reges: constructio interrete. Sed ad bona praeterita redeamus.
                    </p><br>
                    <p class="description">
                        -Si est nihil nisi corpus, summa erunt illa: valitudo, vacuitas doloris, pulchritudo, cetera.<br>
                        Potius inflammat.<br>
                        -Nam quibus rebus efficiuntur voluptates, eae non sunt in potestate sapientis.<br>
                        Minime vero@ks.com<br>
                        -Primum in nostrane potestate est, quid meminerimus?<br>
                    </p><br>
                </section>
            </div>
            <div class="row justify-content-center">
                <!--boton de confirmacion que muestra la ventana emergente-->
                <a class="row justify-content-center big-btn"  onclick="mostrarCubiertaEmergente();">Confirmar</a>
                
            </div>
        </div>
        <!-- informacion del registro -->
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

    <!--script de la ventana emergente-->
    <script src="./js/main.js"></script>
</body>
</html>