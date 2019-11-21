<?php
$activePage = basename($_SERVER['SCRIPT_FILENAME'], '.php');
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="stylesheet" href="../css/section-seperate.css">
    <link rel="stylesheet" href="../css/home.css">
    <link rel="stylesheet" href="../css/ww1.css">
    <link rel="stylesheet" href="../css/music.css">
    <link rel="stylesheet" href="../css/photo.css">
    <link rel="stylesheet" href="../css/footer.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab|Saira+Semi+Condensed&display=swap" rel="stylesheet">
    <title>The war of theirs</title>
</head>

<body class="main-body">
    <header class="main-header">
        <nav>
            <ul class="main-title">
                <li>
                    <a href="">The War Of Theirs</a>
                </li>
            </ul>

            <ul class="subtitle">
                <li <?php if ($activePage == "home") {
                        echo 'class = "active-page"';
                    } ?>>
                    <a href="home.php">Home</a>
                    <!-- <div class="subtitle-WW1">
                        <a href="">WW1</a>
                    </div> -->
                </li>
                <li <?php if ($activePage == "music") {
                        echo 'class = "active-page"';
                    } ?>>
                    <a href="music.php">Music</a>
                </li>
                <li <?php if ($activePage == "photo") {
                        echo 'class = "active-page"';
                    } ?>>
                    <a href="photo.php">Photo</a>
                </li>
                <li <?php if ($activePage == "about") {
                        echo 'class = "active-page"';
                    } ?>>
                    <a href="about.php">About</a>
                </li>
            </ul>
        </nav>
    </header>
    <main>

