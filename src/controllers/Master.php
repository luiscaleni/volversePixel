<?php
namespace Luis\Volversepixel\controllers;
use Luis\Volversepixel\views\elements\ContentQR;
use Luis\Volversepixel\views\elements\Loader;
use Luis\Volversepixel\views\elements\ContentTyC;
use Luis\Volversepixel\views\elements\Movil;

class Master{
    private static string $master='<div id="root">';
    private static string $masterEnd='</div>';

    public static function index(){
        echo Self::$master;
            ContentQR::index();
            Loader::index();
            ContentTyC::index();
            Movil::index();
        echo Self::$masterEnd;    
    }
}