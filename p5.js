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
				
	


fetch("https://jsonplaceholder.typicode.com/users") 
    .then(function(response) {
        
        var register_data = null;

        response.json().then(function(data)
        {
            register_data = data;
			form_validation(register_data);
			
        }
        );
	
    })
    .catch(function(error) {
        console.log("Eroarea este", error);
    });
	
	

function form_validation(data) {
	
	
	var user_id = document.forms["registration"]["userid"].value;
	var password = document.forms["registration"]["passid"].value;
	var name = document.forms["registration"]["full_name"].value;
	var address = document.forms["registration"]["address"].value;
	var country = document.forms["registration"]["country"].value;
	var zip_code = document.forms["registration"]["zip"].value;
	var email = document.forms["registration"]["email"].value;
	var m_gender = document.forms["registration"]["msex"].value;
	var f_gender = document.forms["registration"]["fsex"].value;
	
	if(userid_validation(user_id, 4, 15)){
		if(passid_validation(password, 7, 12)){
			if(allLetter(name)){
				if(alphanumeric(address)){ 
					if(countryselect(country)){
						if(allnumeric(zip_code)){
							if(validate_email(email)){
								if(validsex(m_gender,f_gender)){
								}
							} 
						}
					} 
				}
			}
		}
	}
	return false;
}

function userid_validation(uid, mx, my, data){
	var uid_len = uid.length;
	
	for (index in data) {
		if (data[index].username == uid){
			console.log(data[index].username);
			alert("This user is already taken! Chose another one.");
			return false;
		}
	}
	return true;
	
}

function passid_validation(passid, mx, my) {
	var passid_len = passid.length;
	if (passid_len == 0 || passid_len >= my || passid_len < mx){
		alert("Password should not be empty / length be between "+mx+" to "+my);
		return false;
	}
	else {
		return true;
	}
}

function allLetter(f_name){ 
	var letters = /^[A-Za-z]+$/;
	if(f_name.match(letters)){
		return true;
	}
	else{
		alert("Name must have alphabet characters only");
		return false;
	}
}

function alphanumeric(uadd){ 
	var letters = /^[0-9a-zA-Z]+$/;
	if(uadd.match(letters)){
		return true;
	}
	else{
		alert('User address must have alphanumeric characters only');
		return false;
	}
}

function countryselect(ucountry){
	if(ucountry.value == "Default"){
		alert('Select your country from the list');
		return false;
	}
	else{
	return true;
	}
}

function allnumeric(uzip){ 
	var numbers = /^[0-9]+$/;
	if(uzip.match(numbers)){
	return true;
	}
	else{
	alert('ZIP code must have numeric characters only');
	uzip.focus();
	return false;
	}
}

function validate_email(uemail){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.match(mailformat)){
		return true;
	}
	else{
		lert("You have entered an invalid email address!");
		
		return false;
	}
}

function validsex(umsex,ufsex){
	x=0;
	if(umsex.checked) {
		x++;
	}
	if(ufsex.checked){
		x++; 
	}
	if(x==0){
		alert('Select Male/Female');
		return false;
	}
	else{
		alert('Form Successfully Submitted');
		window.location.reload()
		return true;
	}
}


