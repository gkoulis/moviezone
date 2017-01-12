<?php

include('connectdb.php');

mysql_set_charset("utf8");

$title = $_POST['title'];
$genre = $_POST['genre'];

$query = "INSERT INTO moviesinfo (id, title, genre) VALUES ('', '$title', '$genre')";

$result = mysql_query($query);

if (!$result) {
    die('There was an Internal Error! | File: addmovie.php');
}
echo "Movie Added!";

?>