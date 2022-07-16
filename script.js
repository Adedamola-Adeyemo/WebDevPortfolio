function validateForm() {
    let inputName = document.forms["myForm"]["name"].value;
    let inputEmail = document.forms["myForm"]["email"].value;
    let inputMessage = document.forms["myForm"]["message"].value;
  
    if (inputName == ""){
    alert("Name must be filled out");
    return false;
    }
    if (inputEmail == ""){
    alert("Email must be filled out");
    return false;
    }
    if (inputMessage == ""){
        alert("Message must be filled out");
        return false;
    }
    
          
}
    
  