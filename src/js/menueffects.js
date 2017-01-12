var menu_elements = document.querySelectorAll('.menu>input'),
    menu_length = menu_elements.length;

for(var i=0 ; i<menu_length ; i++) {
	
	menu_elements[i].addEventListener('click', function (e) {
        var target = document.querySelector('.show>.' + e.target.classList[0]); // clicked element
        Array.prototype.filter.call(target.parentNode.children, function (siblings) {
            siblings.style.display = 'none'; // hide sibling elements
        });
        target.style.display = 'block'; // show clicked element
   }); // End function
    
} // End for

/*
Χρησιμοποιούμε αυτήν την μέθοδο γιατί έχουμε πάνω από 2 divs. 
Αν είχαμε 2 div θα χρησιμοποιούσαμε μία απλή swap συνάρτηση.
Δες -> rrmsg.js
*/