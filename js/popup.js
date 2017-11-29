function ReadCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
	
function CreateCookie(name, value, days) {
var date = new Date();
date.setTime(date.getTime() + (days*24*60*60*1000));
var expires = "; expires=" + date.toGMTString();
document.cookie = name+"="+value+expires+"; path=/";
}


var popupStyle = "<style>" +
	".modal {"+
	"display: none; /* Hidden by default */" +
	"position: fixed; /* Stay in place */" +
	"z-index: 10000; /* Sit on top */" +
	"padding-top: 100px; /* Location of the box */"+
   " left: 0;"+
	"top: 0;"+
	"width: 100%; /* Full width */"+
	"height: 100%; /* Full height */"+
	"overflow: auto; /* Enable scroll if needed */"+
	"background-color: rgb(0,0,0); /* Fallback color */"+
	"background-color: rgba(0,0,0,0.9); /* Black w/ opacity */"+
"}"+
".modal-content {"+
	"margin: auto;"+
	"display: block;"+
	"width: 80%;"+
	"max-width: 700px;"+
"}"+
"#caption {"+
	"margin: auto;"+
	"display: block;"+
	"width: 80%;"+
	"max-width: 700px;"+
	"text-align: center;"+
	"color: #ccc;"+
	"padding: 10px 0;"+
	"height: 150px;"+
"}"+
".modal-content, #caption {  "  +
	"-webkit-animation-name: zoom;"+
	"-webkit-animation-duration: 0.6s;"+
	"animation-name: zoom;"+
	"animation-duration: 0.6s;"+
"}"+
"@-webkit-keyframes zoom {"+
	"from {-webkit-transform:scale(0)}" +
	"to {-webkit-transform:scale(1)}"+
"}"+
"@keyframes zoom {"+
	"from {transform:scale(0)} "+
	"to {transform:scale(1)}"+
"}"+
".close {"+
	"position: absolute;"+
	"top: 15px;"+
	"right: 35px;"+
	"color: #f1f1f1;"+
	"font-size: 40px;"+
	"font-weight: bold;"+
   " transition: 0.3s;"+
"}"+
".close:hover,"+
".close:focus {"+
	"color: #bbb;"+
	"text-decoration: none;"+
	"cursor: pointer;"+
"}"+
"@media only screen and (max-width: 700px){"+
	".modal-content {"+
	"width: 100%;"+
	"}"+
"}"+
"</style>";

var kodpopup = popupStyle + "<img id='myImg' src='img/promocja_swiateczna.jpg' width='0' height='0'>" +  //ścieżka image
	"<div id='myModal' class='modal'>" +
	"<span class='close'>&times;</span>"+
	"<img class='modal-content' id='img01'>"+
	"<div id='caption'></div></div>"; +
	"<script>"+
	"var modal = document.getElementById('myModal');"+
	"var img = document.getElementById('myImg');"+
	"var modalImg = document.getElementById('img01');";




if(ReadCookie('popup')!='T'){
	jQuery('body').prepend(kodpopup);
	var modal = document.getElementById('myModal');
	var img = document.getElementById('myImg');	
	var modalImg = document.getElementById('img01');
	img.onload = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
	}
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
	modal.style.display = "none";
	CreateCookie('popup','T',1);
}



