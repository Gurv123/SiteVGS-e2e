<?php
require 'function/compteur.php';
require 'function/auth.php';
session_start();
include_once("./bdd/connection_bdd.php");

if (empty($_SESSION["pseudo"]) )
{
    $_SESSION['poste'] = 0;
    $br = '';
}


else {
    $print = $bdd->query('SELECT * FROM team WHERE pseudo = "' . $_SESSION["pseudo"] . '"');

    //$perm = $bdd->prepare('SELECT * FROM team WHERE pseudo = ?');
    //$code = $perm->execute([$_SESSION["pseudo"]]);
    //var_dump($code);
    $code = $print->fetch();

    if($code == true) {

        $_SESSION['poste'] = $code['Admin'];
    }
}

if(est_connecte()) {
    if ($_SESSION['poste'] == 1) {
        $input_upload = 'display: ;';
        $br = '<br>';


    } else {
        $input_upload = 'display: none;';
        $br = '';

    }
    $pasvuspaspris = 'display: ;';

}

elseif(!est_connecte())
{
    $input_upload = 'display: none;';
    $pasvuspaspris = 'display: none;';

}




ajouter_vue();
?>
<!DOCTYPE html>

<html>
<head>
    <link rel="icon" type="image/jpg" href="../img/vgs.png">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="../css/complements.css">
</head>

<body>
    <header class="header normal" id="toggle_header">

        <div id="header_nav">
            <nav class="a_header" id="toggle_nav" >
                <ul data-cy="nav-ul">
                    <li>
                        <a href="/"  data-cy="home">ACCUEIL</a>
                    </li>

                    <li >
                        <a href="../mangas.php"  data-cy="mangas">MANGAS</a>
                    </li>

                    <li>
                        <a href="../team.php" data-cy="team">LA TEAM</a>
                    </li>
                    <li>
                        <a href="/" data-cy="home-logo"><img src="../img/vgs.png" width="90" height="75"></a>
                    </li>
                    <li>
                        <a href="../contact.php" data-cy="contact">CONTACT</a>
                    </li>
                    <?php if(!est_connecte()): ?>
                        <li>
                            <a href="../inscription.php" data-cy="register">INSCRIPTION</a>
                        </li>
                    <?php endif; ?>
                    <?php if(!est_connecte()): ?>
                    <li>
                        <a href="../vgs-connect.php" data-cy="login">CONNEXION</a>
                    </li>
                    <?php endif; ?>


                    <?php if(est_connecte() ): ?>
                        <li>
                            <a href="../admin/profil.php?name=<?php echo $_SESSION['pseudo']; ?>" data-cy="settings" >PARAM??TRE</a>
                        </li>
                    <?php endif; ?>
                    <?php if(est_connecte()): ?>
                        <li>
                            <a href="../deconnexion.php" data-cy="logout">D??CONNEXION</a>
                        </li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
        <div class="button_top">
            <li>
                <a href="#header_nav"><img class="top-arrow" src="../img/top-arrow.png"></a>
            </li>
        </div>

    </header>
</body>

</html>