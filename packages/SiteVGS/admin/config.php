<?php
require '../function/auth.php';
forcer_utilisateur_connecte();
require 'nav_admin.php';

include("../bdd/connection_bdd.php");




$print = $bdd->query('SELECT * FROM team WHERE pseudo = "' . $_SESSION["pseudo"] . '"');
$code = $print->fetch();



if ($_SESSION['poste'] == 1) {

} else {
    header('Location: ../index.php');

}



?>
<html class="" id="toggle_page">

<head>
    <title>Config</title>
    <meta charset="UTF-8 sans BOM">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>

<body>
    <div align="center" class="config">
        <h3>Cette page vous permet d'interagir avec différentes interfaces du site comme ajouter des membres, en
            supprimer et modifier des projets</h3>
        <br>
        <h4>Pour ajouter un membre à la team cliquer <a class="config" href="add_member.php" style="color: darkred"
                data-cy="add-member-team">ici</a></h4>
        <br>
        <h4>Pour modifier un membre de la team <a class="config" href="select_team.php" style="color: darkred"
                data-cy="update-member-team">ici</a></h4>
        <br>
        <h4>Pour supprimer un(des) membre(s) de la teamn cliquer <a class="config" href="delete_member_team.php"
                style="color: darkred" data-cy="delete-members-team">ici</a></h4>
        <br>
        <h4>Pour supprimer un(des) membre(s) cliquer <a class="config" href="delete_member.php" style="color: darkred"
                data-cy="delete-members">ici</a></h4>
        <br>
        <h4>Pour supprimer un(des) projet(s) (mangas) cliquer <a class="config" href="delete_mangas.php"
                style="color: darkred" data-cy="delete-mangas">ici</a></h4>
        <br>
        <h4>Pour modifier un projet cliquer <a class="config" href="select_project.php" style="color: darkred"
                data-cy="update-project">ici</a>
        </h4>
    </div>

    <?php require '../complements/footer.php'; ?>
    <script type="text/javascript" src="../js/toogle_theme.js"></script>
</body>

</html>