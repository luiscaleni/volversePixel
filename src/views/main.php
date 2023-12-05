<?php 
    namespace Luis\Volversepixel\views;
    use Luis\Volversepixel\controllers\Master;
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="src/views/assets/images/icons/favicon.png">
    <link rel="stylesheet" href="src/views/css/style.css" type="text/css">
    <link rel="preload" href="src/views/assets/videos/1080x1920.mp4" as="video" type="video/mp4" />
    <script src="src/views/js/14_0_0_dist_material-components-web.min.js"></script>
    <title>volversePixel</title>
</head>
<body>
    <?php  Master::index(); ?>
    
    <script src="src/views/js/action.js"></script>
    <script src="src/views/js/script.js" type="module"></script>
    <script src="src/views/js/ux.js"></script>
    <script src="src/views/js/jquery.min.js"></script>
</body>
</html>
