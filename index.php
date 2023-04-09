<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Permissions-Policy" content="interest-cohort=(true)">
    <link rel="icon" type="image/svg+xml" href="sources/logo.svg" />
    <link rel="stylesheet" href="style.scss">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>F.N.D.B</title>
    <script type="module" src="main.js"></script>
    <script src="node_modules/soloalert/index.js"></script>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      </style>
  </head>
  <body>
    <div id="content">
      <div class="one"><a href="map.php"><img  src="sources/folder.png" alt=""><p>CARTES</p></a></div>
      <div class="two"><a href="cesp.html"><img  src="sources/folder.png" alt=""><p>C.ESP</p></a></div>
      <div class="three" id="three"><a href="budget.html"><img  src="sources/folder.png" alt=""><p>BUDGETS</p></a></div>
      <div class="four" id="MS"><img  src="sources/folder.png" alt=""><p>MISKATONIC</p></div>
      <div class="five" id="DB"><img  src="sources/folder.png" alt=""><p>DB</p></div>
      <div id="params">
        <div id="profile">Profil</div>
        <div id="param">Parametres</div>
        <div id="ps">Personnalisation</div>
        <div id="menu"><a href="index.html">Acceuil</a></div>
        <div id="dc"> <a href="https://fonts.google.com/specimen/Montserrat">Déconnexion </a></div>
    </div>
    <div id="profil">
     <img src="sources/logo.svg" alt="">
     <p>Agent X</p>
  </div>
  <div id="qual">
    <p style="text-align: center;">Qualité</p> <br/>
    <div class="options"><p>Basse-</p><p>Moyenne-</p><p>Haute </p></div>
      <input type="range" min="0" max="100" step="50" value="50" class="slider" id="myRange">
   
  </div>
  <div id="screen">
    <p class="fd">Fonds d'écran</p>
    <img id="un" src="sources/bg.png" alt="">
    <img  id="de" src="sources/folder.png" alt="">
    <img id="tr" src="sources/bg.png" alt="">
    <img  id="qu" src="sources/folder.png" alt="">
    <img  id="ci" src="sources/bg.png" alt="">
    <img  id="si" src="sources/folder.png" alt="">
  </div>
  </div>

  <footer><div id="clock"></div><img class="logo" id ="logo" src="sources/logo.png" alt="">
    <img src="sources/meteo.svg" alt="">
  </footer>

    <!-- <div id="prompt"><p>entrez le mot de passe</p><input type="text"><button></button></div> -->
    <div id="alert"></div>

 

  </body>
</html>
