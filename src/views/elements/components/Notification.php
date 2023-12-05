<?php
namespace Luis\Volversepixel\views\elements\components;

class Notification{
    private static string $notification='
        <div id="notification">
            <div class="contImg">
                <img src="src/views/assets/images/icons/ntf.png"></div>
            <div id="contPositionMsg">
                <span id="msg1"></span>
                <span id="msg2"></span>
                <span id="msg3"></span>
                <span id="msg4"></span>
                <span id="msg5"></span>
            </div>
            <div id="contMsg"></div>
        </div>
    ';

    public static function index(){
        echo self::$notification;
    }
}