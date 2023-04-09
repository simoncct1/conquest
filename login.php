
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="login.css">
    <link rel="stylesheet" href="style.scss">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      </style>

</head>
<body class="login-page">

<div class="login-box">
    <img src="./sources/logo.png" alt="">
        <h2 class="heading-login-box">Login</h2>
        <form action="auth.php" method="post">
            <div class="user-box">
                <input class="user-box-input" type="text" name="user" required>
                <label class="user-box-label">Nom d'utilisateur</label>
            </div>
            <div class="user-box">
                <input class="user-box-input" type="password" name="pass" required>
                <label class="user-box-label">Mot de passe</label>
            </div>
            <button type="submit" class="login-box-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Connexion </button>
            <a class="login-box-button nope" href="#">
                Pas de compte?
            </a>
        </form>
    </div>
   
</body>

</html>