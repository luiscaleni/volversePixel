<?php
namespace Luis\Volversepixel\views\elements;
use Luis\Volversepixel\views\elements\components\MessageAlert;
use Luis\Volversepixel\views\elements\components\Notification;
use Luis\Volversepixel\views\elements\components\ContentApp;

class Movil{
    private static string $movil='<div class="movil" id="movil">';
    private static string $movilEnd='</div>';
    public static function index(){
        echo Self::$movil;
            MessageAlert::index();
            Notification::index();
            ContentApp::index();
        echo Self::$movilEnd;
    }
}