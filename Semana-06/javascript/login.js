window.onload = function() {
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var error = document.querySelectorAll('.log-in-form p');
    var buttonLogIn = document.querySelector('button');
    var emailValue = document.getElementById('email-value');
    var passwordValue = document.getElementById('password-value');

    // Result of the validations per field

    var emailValidationRes;
    var passwordValidationRes;

    // Add events to every one of the inputs
    
    inputEmail.addEventListener('blur', validateEmail);
    inputEmail.addEventListener('focus', removeErrorEmail);

    inputPassword.addEventListener('blur', validatePassword);
    inputPassword.addEventListener('focus', removeErrorPassword);

    buttonLogIn.addEventListener('click', result);

    // Define the validation functions

    function validateEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            emailValidationRes = e.target.value;
            return emailValidationRes;
        } else {
            error[0].style.visibility = 'visible';
            emailValidationRes = 'Invalid value';
            return false;
        }
    }
    
    function removeErrorEmail(e){
        error[0].style.visibility = 'hidden';
    }

    function validatePassword(e){
        e.preventDefault();
        if(e.target.value.length < 8){
            error[1].style.visibility = 'visible';
            passwordValidationRes = 'Invalid value';
        } else {
            passwordValidationRes = e.target.value;
        }
    }

    function removeErrorPassword(e){
        error[1].style.visibility = 'hidden';
    }

    // Button

    function result(e){
        e.preventDefault();
        modal.style.display = "block";
        emailValue.innerHTML = emailValidationRes;
        passwordValue.innerHTML = passwordValidationRes;
    }

    // Handling modal

    var modal = document.getElementById('my-modal');
    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
    modal.style.display = 'none';
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
    }
}