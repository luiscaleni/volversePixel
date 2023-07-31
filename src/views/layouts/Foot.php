<?php
namespace Luis\Petslife\views\layouts;

class Foot{
    private string $foot;
    private string $add="";
    public function __construct()
    {
        $this->foot ='
            </div>
            <script src="src/views/js/jquery.min.js"></script>
            <script src="src/views/js/js.js"></script>
        </body>
        '.$this->add.'
        </html>
        ';
    }
    public function index(){
        return $this->foot;
    }
    public function add(string $add){
        $this->add=$add;
        return $this->add;
    }
}