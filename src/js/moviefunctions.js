function addmovie(){
    
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    
    // Create some variables we need to send to our PHP file
    var url = "php/addmovie.php";
    var varTitle = document.getElementById("field1").value; // title
    var varGenre = document.getElementById("genre").value;  // genre
    var vars = "&title="+varTitle+"&genre="+varGenre;       // vars - send to php file
    
    hr.open("POST", url, true);
    
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    
		    var return_data = hr.responseText;
			
			document.getElementById("status").innerHTML = return_data;
			
			// Show pop up
			showPopupRight();
			
			// Clear inputs (type=text)
			document.getElementById('field1').value = "";
			document.getElementById('genre').value = "Uncategorized";
			
	    }
    };
    
    if(varTitle=='') {
		document.getElementById("status").innerHTML = "No Title!";
		    	
    	showPopupWrong();
    }
    else {
    	// Send the data to PHP now... and wait for response to update the status div
    	hr.send(vars); // Actually execute the request
    	document.getElementById("status").innerHTML = "Processing...";	
    }
    
} // End addmove

function deletemovie() {
    
    // Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    
    // Create some variables we need to send to our PHP file
    var url = "php/deletemovie.php";
    var varID = document.getElementById("idedit").value;
    var vars = "&id="+varID;
    
    hr.open("POST", url, true);
    
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementById("status").innerHTML = return_data;
			
			// Show pop up
			showPopupRight();
			
			hideeditmovie(); // clear all input
	    }
    };
    
	// Send the data to PHP now... and wait for response to update the status div
	hr.send(vars); // Actually execute the request
	document.getElementById("status").innerHTML = "processing...";	
    
} // End deletemovie

function editmovie() {
	
	// Create our XMLHttpRequest object
    var hr = new XMLHttpRequest();
    
    // Create some variables we need to send to our PHP file
    var url = "php/updatemovie.php";
    var varID    = document.getElementById('idedit').value;
    var varTitle = document.getElementById("titleedit").value;
    var varGenre = document.getElementById("genreedit").value;
    var vars = "&id="+varID+"&title="+varTitle+"&genre="+varGenre;
    
    hr.open("POST", url, true);
    
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementById("status").innerHTML = return_data;
			
			// Show pop up
			showPopupRight();
			
			document.getElementById('searchform').value = "";
			
			document.getElementById('resultsedit').style.display = 'none';
	    }
    };
    
    if(varTitle=='') {
		document.getElementById("status").innerHTML = "No Title!";
		
		showPopupWrong();
    }
    else {
    	// Send the data to PHP now... and wait for response to update the status div
    	hr.send(vars); // Actually execute the request
    	document.getElementById("status").innerHTML = "Processing...";	
    }
    
} // End editmovie

function hideeditmovie() {
	
	document.getElementById('searchform').value = "";
	
	document.getElementById('idedit').value = "";
    document.getElementById("titleedit").value = "";
    document.getElementById("genreedit").value = "";
    
	document.getElementById('resultsedit').style.display = 'none';
	
} // End hideeditmovie
