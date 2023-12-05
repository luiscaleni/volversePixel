<?php
namespace Luis\Volversepixel\views\elements;

class Loader{
    private static string $loader='
        <div id="screenLoader">
            <div id="contLoader">
                <img src="src/views/assets/images/icons/imagotipo.png"/>
                <div id="contLoad">
                    <div id="load"></div>
                </div>
            </div>
            <div id="copyright">
                <p>PAV 4 | CAMPOS/TRILNICK | FADU 2023</p>
            </div>
        </div>
    ';

    public static function index(){
        echo self::$loader;
    }
}