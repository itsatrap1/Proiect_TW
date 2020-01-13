function DropDown_func() {
				  document.getElementById("dropdown_menu").classList.toggle("show");
				}


				 window.onclick = function(e) {
				  if (!e.target.matches(".dropbtn")) {
					var dropdown_menu = document.getElementById("dropdown_menu");
					if (dropdown_menu.classList.contains("show")) {
						dropdown_menu.classList.remove("show");
					}
				  }
				} 
function F() {
			var popup = document.getElementById("myPopup");
			popup.classList.toggle("show");
						
		}

function F1() {
			var popup = document.getElementById("myPopup1");
			popup.classList.toggle("show");
						
		}

function F2() {
			var popup = document.getElementById("myPopup2");
			popup.classList.toggle("show");
						
		}


