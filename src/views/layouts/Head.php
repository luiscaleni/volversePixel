<?php
namespace Luis\Petslife\views\layouts;

class Head{
    private string $head;
    private string $add="";
    public function __construct()
    {
        $this->head ='
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="src/views/css/style.css" type="text/css">
            <link rel="icon" type="image/x-icon" href="#"/>
            <title>iPhone 14 Pro max</title>
            '.$this->add.'
        </head>
        <body>
        <div class="container">
            <span class="loader" id="loader"></span>
        ';
    }
    public function index(){
        return $this->head;
    }
    public function add(string $add){
        $this->add=$add;
        return $this->add;
    }
}