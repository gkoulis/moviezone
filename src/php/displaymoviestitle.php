<?php

header("Content-type: text/xml");

include('connectdb.php');

$query = "SELECT * FROM moviesinfo ORDER BY title";

$result = mysql_query($query);

$xml = "<?xml version='1.0' encoding='UTF-8'?>\n";

$xml .= "<movies>\n";

while($row = mysql_fetch_array($result)) {
	
	$xml .= 
	"<movie>
		<id>" . $row['id'] . "</id>
		<mtitle>" . $row['title'] . "</mtitle>
		<genre>" . $row['genre'] . "</genre>
	</movie>\n";
	
}

$xml .= "</movies>";

echo $xml;

?>