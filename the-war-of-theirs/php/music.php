<?php
$pageTitle = "Music";

include 'header.php';
?>
<div class="section-header">
    <p>Select Music</p>
</div>

<section class="song-cover">
    <div class="song-cover-up">
        <a href="">
            <img src="../images/cover/music_cover_1.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_2.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_3.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_4.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_5.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_6.jpg" alt="">
        </a>
    </div>

    <div class="song-cover-down">
        <a href="">
            <img src="../images/cover/music_cover_7.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_8.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_9.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_10.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_11.jpg" alt="">
        </a>
        <a href="">
            <img src="../images/cover/music_cover_12.jpg" alt="">
        </a>
    </div>

</section>

<?php
include 'section-seperate.php';
?>

<div class="section-header">
    <p>Music Interaction</p>
</div>

<section id="song-interaction-page">

    <div id="previous" class="switch">
        <a href=""><img src="../images/arrow_radius.png" alt=""></a>
    </div>

    <div id="song-interaction">

        <div id="song-cover-play">
            <div id="song-cover">
                <div id="song-cover-image"><img src="../images/cover/music_cover_4.jpg" alt=""></div>
                <div id="song-brief-information">
                    <p>Title: <?php echo $recordTitle; ?><br><br></p>
                    <p>Creator: <?php echo $recordCreator; ?><br><br></p>
                    <p>Subjects: <?php echo $recordSubjects; ?><br><br></p>
                    <p>Description: <?php echo $recordDescription; ?> <br><br></p>
                </div>
            </div>
            <div id="song-play">
                <div id="song-play-disc"><img src="../images/disc.png" alt=""></div>
                <div id="song-play-stylus">
                    <div id="stylus-needle"><a href="#music-interaction-title"><img src="../images/stylus.png" alt=""></a></div>
                    <div id="stylus-basic"><img src="../images/stylus-basic.png" alt=""></div>
                </div>
            </div>

        </div>
        <div id="more-detail">
            <a href="#music-information-page">More detail</a>
        </div>
        <div id="interactive-music-sheet">
            <div><a href=""><img id="music-sheet" src="../images/music_sheet_1.png" alt=""></a></div>
            <a id="hover-box-1" href=""></a>
            <img class="music-to-photo" id="music-to-photo-1" src="../images/photo_1.jpg" alt="">
            <a id="hover-box-2" href="photo.php#photo-detail"></a>
            <img class="music-to-photo" id="music-to-photo-2" src="../images/photo_2.jpg" alt="">
            <a id="hover-box-3" href=""></a>
            <img class="music-to-photo" id="music-to-photo-3" src="../images/photo_3.jpg" alt="">
            <a id="hover-box-4" href=""></a>
            <img class="music-to-photo" id="music-to-photo-4" src="../images/photo_4.jpg" alt="">
        </div>
    </div>

    <div id="next" class="switch">
        <a href=""><img src="../images/arrow_radius.png" alt=""></a>
    </div>

</section>

<?php
include 'section-seperate.php';
?>

<div class="section-header">
    <p>Music Information</p>
</div>

<section>

</section>

<?php
include 'footer.php';
?>