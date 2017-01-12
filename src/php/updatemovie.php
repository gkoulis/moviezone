<?php

include('connectdb.php');

mysql_set_charset("utf8");

$id    = $_POST['id'];
$title = $_POST['title'];
$genre = $_POST['genre'];

$query = "UPDATE moviesinfo SET title='$title', genre='$genre' WHERE id='$id'";

$result = mysql_query($query);

if (!$result) {
    die('There was an Internal Error! | File: updatemovie.php');
}
echo "Movie's Info Updated!";

?>