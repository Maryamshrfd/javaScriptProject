var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(nameError.length == 0){
        nameError.innerHTML = 'name is required!';
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'write full name';
        return false;
    }

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//......................................................................................Email
function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(emailError.length == 0){
        emailError.innerHTML = 'email is required!';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'email invalid!';
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'password is required!';
        return false;
    }

    if(password.length < 8) {  
        passwordError.innerHTML = 'Password length must be at least 8 characters';  
        return false;  
     }  
    passwordError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword()){
        submitError.style.display = 'block';
        submitError.innerHTML('Please try again');
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }else{
        alert("Correct :)");
        return true;
    }
}