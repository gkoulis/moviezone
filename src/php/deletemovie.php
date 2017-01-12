<?php

include('connectdb.php');

$id = $_POST['id'];

$query = "DELETE FROM moviesinfo WHERE id='$id'";

$result = mysql_query($query);

if (!$result) {
    die('There was an Internal Error! | File: deletemovie.php');
}
echo "Movie Deleted!";

?>