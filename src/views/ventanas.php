<?php
namespace Luis\Petslife\views;
use Luis\Petslife\views\layouts\Head;
use Luis\Petslife\views\layouts\Foot;

use Luis\Petslife\controllers\Home;

$head = new Head;
echo $head->index();

    $home = new Home;
    echo $home->addItem('<div class="ventana-abierta" id="execute2">');
    
        include("src/views/bodys/ventanas.inc.php");
    
    echo $home->addItemAndHomeOpens('</div>');

    include("src/views/components/apps.php");

$foot = new Foot;
echo $foot->index();