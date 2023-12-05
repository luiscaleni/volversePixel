<?php
namespace Luis\Volversepixel\views\elements;

class ContentQR{
    private static string $contentQR='
        <div id="contentQR">
            <img src="src/views/assets/images/qr.gif" id="qr"/>
        </div>
    ';

    public static function index(){
        echo self::$contentQR;
    }
}