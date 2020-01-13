function DropDown_func() {
				  document.getElementById("dropdown_menu").classList.toggle("show");
				}


				 window.onclick = function(e) {
				  if (!e.target.matches(".dropbtn")) {
					var dropdown_menu = document.getElementById("dropdown_menu");
					if (dropdown_menu.classList.contains('show')) {
						dropdown_menu.classList.remove('show');
					}
				  }
				}


