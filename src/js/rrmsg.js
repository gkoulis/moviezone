// Request - Response Msgs

function showPopupRight() {
	document.getElementById('icon-right').style.display = 'block';
	setTimeout(hidePopupRight, 1000);
} // End showPopup

function hidePopupRight() {
	document.getElementById('icon-right').style.display = 'none';
} // End hidePopup

function showPopupWrong() {
	document.getElementById('icon-wrong').style.display = 'block';
	setTimeout(hidePopupWrong, 1000);
} // End showPopup

function hidePopupWrong() {
	document.getElementById('icon-wrong').style.display = 'none';
} // End hidePopup

function showStatus() {
	document.getElementById('status').style.display = 'block';
} // End showStatus

function hideStatus() {
	document.getElementById('status').style.display = 'none';
} // End hideStatus
