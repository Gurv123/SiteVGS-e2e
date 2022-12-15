<?php
require '../function/auth.php';
forcer_utilisateur_connecte();
require 'nav_admin.php';
include("../bdd/connection_bdd.php");
$team = $bdd->query('SELECT * FROM team');

$print = $bdd->query('SELECT * FROM team WHERE pseudo = "'.$_SESSION["pseudo"].'"' );
$code = $print->fetch();

if ($_SESSION['poste'] == 1  ){

}

else
{
    header('Location: /');
}


if (isset($_POST['formmodif'])) {
    $_SESSION['name'] = $_POST['selectusername'];
    header("Location: modif_team.php?name=".$_SESSION['name']);
}

?>

<html class="" id="toggle_page">
<head>
    <title>Selection team</title>
    <meta charset="UTF-8 sans BOM">
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/admin/upload.css">
</head>

<body>
<?php
if(isset($erreur)) {
    echo '<font color="red">'.$erreur."</font>";
}
?>
<div align="center">
    <h3>Veuillez selectionner la personne que vous voulez modifier :</h3>
</div>

<div class="choices form">
    <form method="POST" data-cy="update-member-team-form">
        <table>
            <?php while ($donnees = $team->fetch()): ?>
                <tr>
                    <td>
                        <input type="radio" name="selectusername" id="selectusername" value="<?= $donnees['pseudo'] ?>" data-cy="update-member-team-radio">
                    </td>
                    <td>
                        <label for="selectusername" data-cy="update-member-team-username"><?= $donnees['pseudo'] ?></label>
                    </td>
                </tr>
            <?php endwhile; ?>
        </table>
        <input class="input-select formchoice" type="submit" formmethod="post" name="formmodif" value="Modifier !" data-cy="update-member-team-submit" >
    </form>
</div>

<?php require '../complements/footer.php'; ?>
<script type="text/javascript" src="../js/toogle_theme.js"></script>
</body>
</html>

