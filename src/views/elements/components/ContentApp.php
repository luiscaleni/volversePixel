<?php
namespace Luis\Volversepixel\views\elements\components;

class ContentApp{
    private static string $contentApp='
        <div class="contentApp" id="contentApp">
            <div id="contVPB">
                <div id="videoProgressBar"></div>
            </div>
            <div id="contMsgNav">
                <p id="msgNav">Por el momento no es posible esta opción.</p>
            </div>
            <div id="screenPlay">
                <button name="canal" id="webcamButton" title="Play" alt="Play">
                    <img src="src/views/assets/images/icons/play.png">
                </button>
            </div>
            <div id="appScreen">
                <div id="alertHome">
                    <p id="alertHomeMsg">¿Desea regresar a la página de inicio?</p>
                    <div id="optionBtn">
                        <a href="#" id="cancel">Cancelar</a>
                        <p>|</p>
                        <a href="index.php">Aceptar</a>
                    </div>
                </div>
                <div id="header">
                    <div class="content">
                        <div id="headerTitle">
                            <p>Reel</p>
                        </div>
                        <div id="headerOptions">
                            <a href="#" id="menu">
                                <img src="src/views/assets/images/icons/menu.png">
                            </a>
                        </div>
                    </div>
                </div>
                <div id="contentDataPublic">
                    <div class="content">
                        <div id="dataPublic">
                            <div id="infoPublic">
                                <img src="src/views/assets/images/avatar.jpg" title="LuisCaleniV">
                                <p id="username" title="@LuisCaleniV">@LuisCaleniV</p>
                            </div>
                            <p id="suscrito">Suscrito</p>
                        </div>
                    
                        <p id="titleShort">Accidentes con celulares ...</p>
                    </div>
                </div>
                <div id="nav">
                    <div id="contElementsNav">
                        <a href="#" id="home">
                            <img src="src/views/assets/images/icons/menuPrincipal.png">
                        </a>                       
                        <a href="#" id="plus">
                            <img src="src/views/assets/images/icons/plus.png">
                        </a>                       
                        <a href="#" id="menuUser">
                            <img src="src/views/assets/images/icons/menuUser.png">
                        </a>
                    </div>
                </div>
                <div id="contVideo">   
                    <video id="localVideo" preload="auto">
                        <source src="src/views/assets/videos/1080x1920.mp4">
                    </video>
                    <video id="webcam" autoplay playsinline></video>
                </div>
            </div>
            <canvas id="outputCanvas"></canvas>
        </div>
    </div>
    ';

    public static function index(){
        echo self::$contentApp;
    }
}