function searchXMLdoc() {

var xmlhttp;

var url ="php/displaymovies.php";

var txt, xx, x, i;

var inputid = document.getElementById('searchform').value;

if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
}
else { // code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.onreadystatechange=function() {
  	
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    
	    x=xmlhttp.responseXML.documentElement.getElementsByTagName("movie");
	    
	    for(i=0 ; i<x.length ; i++) {
	    	
	    	xx=x[i].getElementsByTagName("id");
	        {
	        try {
	          	
	        	if(xx[0].firstChild.nodeValue == inputid) {
	          		
	          		xx=x[i].getElementsByTagName("id");
	          		{
	          			try {
	          				document.getElementById('idedit').value = xx[0].firstChild.nodeValue;
	          			}
	          			catch(er) {
	          				document.getElementById('status').innerHTML = "ERROR Title! | Function: searchXMLdoc | Line: 38";
	          			}
	          		}
	          		xx=x[i].getElementsByTagName("mtitle");
	          		{
	          			try {
	          				document.getElementById('titleedit').value = xx[0].firstChild.nodeValue;
	          			}
	          			catch(er) {
	          				document.getElementById('status').innerHTML = "ERROR Title! | Function: searchXMLdoc | Line: 47";
	          			}
	          		}
	          		xx=x[i].getElementsByTagName("genre");
	          		{
	          			try {
	          				document.getElementById('genreedit').value = xx[0].firstChild.nodeValue;
	          			}
	          			catch(er) {
	          				document.getElementById('status').innerHTML = "ERROR Genre! | Function: searchXMLdoc | Line: 56";
	          			}
	          		}
	          		
	          		document.getElementById('resultsedit').style.display = 'block';
    				document.getElementById('status').innerHTML="Movie Found!";
    				
	          		break;
	          		
	          	} // End if
	          
	        }
	        catch(er) {
	        	document.getElementById('status').innerHTML="ERROR!";
	        }
	        }
	    } // End for
    	
    	if(i == x.length) {
    		
    		document.getElementById('status').innerHTML="Movie Not Found!";
    		
    		// Show pop up
    		showPopupWrong();
    		
    		document.getElementById('searchform').value = "";
    		
    	} // End if
    	
   } // End if
   
};

xmlhttp.open("GET", url, true);

xmlhttp.send();

} // End searchXMLdoc