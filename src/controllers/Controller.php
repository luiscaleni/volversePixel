<?php
namespace Luis\Petslife\controllers;
use Luis\Petslife\controllers\View;

class Controller{
    private string $route;
    public function render($name){
        $view = new View;
        $this->route= $view->src($name);
        require_once($this->route);
    }

    public function renderBodys($name){
        $view = new View;
        $this->route= $view->srcBodys($name);
        require_once($this->route);
    }
}