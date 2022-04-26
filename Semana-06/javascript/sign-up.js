window.onload = function() {
    var inputName = document.getElementById('name');
    var inputLastName = document.getElementById('last-name');
    var inputDni = document.getElementById('dni');
    var inputDateOfBirth = document.getElementById('date-of-birth');
    var inputPhoneNumber = document.getElementById('phone-number');
    var inputAdress = document.getElementById('adress');
    var inputLocation = document.getElementById('location');
    var inputPostalCode = document.getElementById('postal-code');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var inputRepeatPassword = document.getElementById('repeat-password');
    var error = document.querySelectorAll('.sign-up-form p');
    var buttonSignUp = document.querySelector('button');

    var nameValue = document.getElementById('name-value');
    var lastNameValue = document.getElementById('last-name-value');
    var dniValue = document.getElementById('dni-value');
    var dateOfBirthValue = document.getElementById('date-of-birth-value');
    var phoneNumberValue = document.getElementById('phone-number-value');
    var adressValue = document.getElementById('adress-value');
    var locationValue = document.getElementById('location-value');
    var postalCodeValue = document.getElementById('postal-code-value');
    var emailValue = document.getElementById('email-value');
    var passwordValue = document.getElementById('password-value');
    var repeatPasswordValue = document.getElementById('repeat-password-value');

    // Result of the validations per field

    var nameValidationRes;
    var lastNameValidationRes;
    var dniValidationRes;
    var dateOfBirthValidationRes;
    var phoneNumberValidationRes;
    var adressValidationRes;
    var locationValidationRes;
    var postalCodeValidationRes;
    var emailValidationRes;
    var passwordValidationRes;
    var repeatPasswordValidationRes;

    // Add events to every one of the inputs
    
    inputEmail.addEventListener('blur', validateEmail);
    inputEmail.addEventListener('focus', removeErrorEmail);

    inputPassword.addEventListener('blur', validatePassword);
    inputPassword.addEventListener('focus', removeErrorPassword);

    // inputName.addEventListener('blur', validateName);
    // inputName.addEventListener('focus', removeErrorName);

    buttonSignUp.addEventListener('click', result);

    // Define the validation functions

    function validateEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            emailValidationRes = e.target.value;
            return emailValidationRes;
        } else {
            error[8].style.visibility = 'visible';
            emailValidationRes = 'Invalid value';
            return false;
        }
    }
    
    function removeErrorEmail(e){
        error[8].style.visibility = 'hidden';
    }

    function validatePassword(e){
        e.preventDefault();
        if(e.target.value.length < 8){
            error[9].style.visibility = 'visible';
            passwordValidationRes = 'Invalid value';
        } else {
            passwordValidationRes = e.target.value;
        }
    }

    function removeErrorPassword(e){
        error[9].style.visibility = 'hidden';
    }

    // Button

    function result(e){
        e.preventDefault();
        modal.style.display = "block";
        nameValue.innerHTML = nameValidationRes;
        lastNameValue.innerHTML = lastNameValidationRes;
        dniValue.innerHTML = dniValidationRes;
        dateOfBirthValue.innerHTML = dateOfBirthValidationRes;
        phoneNumberValue.innerHTML = phoneNumberValidationRes;
        adressValue.innerHTML = adressValidationRes;
        locationValue.innerHTML = locationValidationRes;
        postalCodeValue.innerHTML = postalCodeValidationRes;
        emailValue.innerHTML = emailValidationRes;
        passwordValue.innerHTML = passwordValidationRes;
        repeatPasswordValue.innerHTML = repeatPasswordValidationRes;
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