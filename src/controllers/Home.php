<?php
namespace Luis\Petslife\controllers;

class Home{
    private string $home;
    private string $addClass="";
    public function __construct()
    {
        $this->home= '<span class="home'.$this->addClass.'" onclick="ocultar()">_____________</span>';
    }

    public function index(){
        return $this->home;
    }

    public function addClass(string $var){
        $this->addClass=" ". $var;
        return $this->home;
    }

    public function replace(string $var){
        $this->home= '<span class="'.$var.'" onclick="ocultar()">_____________</span>';
        return $this->home;
    }

    public function addItem(string $var){
        $newHome = $var;
        return $newHome;
    }

    public function addItemAndHome(string $var){
        $newHome = $this->home . $var;
        return $newHome;
    }
    public function addItemAndHomeOpens(string $var){
        $newHome = '<span class="home" onclick="ocultar2()"><a href="index.php">_____________</a></span>' . $var;
        return $newHome;
    }
}