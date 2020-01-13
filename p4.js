function DropDown_func() {
				  document.getElementById("myDropdown").classList.toggle("show");
				}


				 window.onclick = function(e) {
				  if (!e.target.matches(".dropbtn")) {
					var myDropdown = document.getElementById("myDropdown");
					if (myDropdown.classList.contains("show")) {
						myDropdown.classList.remove("show");
					}
				  }
				} 
				

var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}
	x[myIndex-1].style.display = "block";
	setTimeout(carousel, 4500);
}


