<?php
header("Cache-Control: no-cache, must-revalidate");

/* Connexion DataBase */
function loadClass($className) {
  require('../classes/'.$className.'.php');
}

spl_autoload_register('loadClass', true,);

$playerManager = new PlayerManager;

/* Enregistrement du score */
if (
  isset($_GET['score']) &&
  is_numeric($_GET['score']) &&
  isset($_GET['pseudo']) &&
  is_string($_GET['pseudo']) &&
  isset($_GET['comment']) &&
  is_string($_GET['comment'])
  ) {

    $data = [];
    $data['gameName'] = 'fb';
    $data['pseudo'] =htmlspecialchars($_GET['pseudo']);
    $data['score'] = (int) htmlspecialchars($_GET['score']);
    $data['comment'] = htmlspecialchars($_GET['comment']);

    $playerManager->add(new Player($data));

    header('Location: index.php');

  }

/* Récupération des scores */
$rqScore = $playerManager->getFbPlayers();

$listScores = [];

ob_start();

while (($data = $rqScore->fetch(PDO::FETCH_ASSOC)) && (count($listScores) < 11)) {
  $newPlayer = new Player($data);

  if (!in_array($newPlayer->pseudo(), $listScores) ) {
    $listScores[] = $newPlayer->pseudo();
    echo $newPlayer->pseudo() . ' : ' . $newPlayer->score() . ' => '.$newPlayer->comment().'<br />';
  }
}

$scores = ob_get_clean();
ob_start();
?>

<div class="fb-container">
  <div class="fb-gameContainer">
    <div class="fb-sky">
      <div class="fb-bird"></div>
    </div>
    <div class="fb-ground">
      <div class="fb-scoreDisplay" id="fb-scoreValue"></div>
    </div>
  </div>
</div>


<?php
$grid = ob_get_clean();
$infos = '<p><strong>Pour que Flappy remonte :</strong><br>
          Avec le clavier => touche "Entrée",<br>
          Smartphone ou souris => le bouton "FLY"<br></p>';

require '../template/template.php';
?>

