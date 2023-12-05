<?php
namespace Luis\Volversepixel\views\elements\components;

class MessageAlert{
    private static string $alert='
        <div id="messageAlert">
            <p>¡Ey!, no te me distraigas.</p>
        </div>
    ';

    public static function index(){
        echo self::$alert;
    }
}