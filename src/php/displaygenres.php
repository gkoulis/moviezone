<?php

header("Content-type: text/xml");

include('connectdb.php');

$query = "SELECT * FROM moviesgenres ORDER BY id";

$result = mysql_query($query);

$xml = "<?xml version='1.0' encoding='UTF-8'?>\n";

$xml .= "<genres>\n";

while($row = mysql_fetch_array($result)) {
	
	$xml .= 
	"<genre>
		<id>" . $row['id'] . "</id>
		<mgenre>" . $row['genre'] . "</mgenre>
	</genre>\n";
	
}

$xml .= "</genres>";

echo $xml;

?>