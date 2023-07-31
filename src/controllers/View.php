<?php
namespace Luis\Petslife\controllers;

class View{
    protected string $direction;
    public function src($nombre){
        return $this->direction = 'src/views/' . $nombre . '.php';
    }

    public function srcBodys($nombre){
        return $this->direction = 'src/views/bodys/' . $nombre . '.inc.php';
    }

 }