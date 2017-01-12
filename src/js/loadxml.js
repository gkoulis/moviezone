function loadXMLDoc(input) {

var xmlhttp;

var url ="php/displaymovies.php";      // sort by id
var url2="php/displaymoviestitle.php"; // sort by title
var url3="php/displaymoviesgenre.php"; // sort by genre

var txt, xx, x, i; // variables | use - convert xml to table (html)

var orderby; 	   // 0 for id | 1 for title | 2 for genre (sort)

orderby = input;   // users input (option)

if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
}
else { // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    	txt="<table style='width: 382px; color: white; border: 1px solid white; border-collapse: collapse;'><thead><tr><th>#</th><th>Title</th><th>Genre</th></tr></thead><tbody>";
    	x=xmlhttp.responseXML.documentElement.getElementsByTagName("movie");
    	for(i=0 ; i<x.length ; i++) {
      		txt=txt + "<tr>";
      		xx=x[i].getElementsByTagName("id");
        	{
        	try {
          		txt=txt + "<td style='border: 1px solid white; padding:5px'>" + xx[0].firstChild.nodeValue + "</td>";
          	}
        	catch(er) {
          		txt=txt + "<td>&nbsp;</td>";
          	}
        	}
      		xx=x[i].getElementsByTagName("mtitle");
        	{
        	try {
          		txt=txt + "<td style='border: 1px solid white; padding:5px'>" + xx[0].firstChild.nodeValue + "</td>";
          	}
        	catch(er) {
          		txt=txt + "<td>&nbsp;</td>";
          	}
        	}
    		xx=x[i].getElementsByTagName("genre");
      		{
        	try {
          		txt=txt + "<td style='border: 1px solid white; padding:5px'>" + xx[0].firstChild.nodeValue + "</td>";
         	}	
        	catch(er) {
          		txt=txt + "<td>&nbsp;</td>";
          	}
        	}
      		txt=txt + "</tr>";
      	} // End for	 
      	txt=txt + "</tbody></table>";
    
    	document.getElementById('movielist').innerHTML=txt;
    	
    } // End if
    
}; // End function

if(orderby == 0) {
	xmlhttp.open("GET", url, true);

	xmlhttp.send(); // sort by id
}
else if(orderby == 1) {
	xmlhttp.open("GET", url2, true);

	xmlhttp.send(); // sort by title
}
else {
	xmlhttp.open("GET", url3, true);

	xmlhttp.send(); // sort by genre
}

document.getElementById("movielist").className += " scrollabletable"; // Change class - make table scrollable

} // End loadXMLdoc