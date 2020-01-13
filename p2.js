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
				
		
fetch("https://jsonplaceholder.typicode.com/users") // Call the fetch function passing the url of the API as a parameter
    .then(function(response) {
        // Daca a fost totul cu success
        var register_data = null;
		var index;
        // Spre deosebire de primele 2 variante, fetch API ne intoarce o promisiune
        // fara sa intram in detalii tehnice, metoda response.json() converte promisiunea la un obiect de tip JSON care cotnine datele noastre
        // dar trebuie sa folosim "then" ca sa asteptam pana are loc conversia (pt ca response.json() este async)
        response.json().then(function(data)
        {
            console.log("response din Fetch API",data);
            register_data = data;
			
			d(register_data, "Bret");
			
        }
        );
	
    })
    .catch(function(error) {
        // Daca am avut o eroare
        console.log("Eroarea este",error);
    });
	
	
function d (data, name) {
	for (i = 0; i <= 10; i++) {
				if (data.username == name){
					alert("DAAA");
				}
			}
			
}