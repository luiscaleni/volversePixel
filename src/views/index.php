<?php
namespace Luis\Petslife\views;
use Luis\Petslife\views\layouts\Head;
use Luis\Petslife\views\layouts\Foot;

$head = new Head;
echo $head->index();

    include("src/views/components/apps.php");

$foot = new Foot;
echo $foot->index();