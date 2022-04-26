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

    inputName.addEventListener('blur', validateName);
    inputName.addEventListener('focus', removeErrorName);

    inputLastName.addEventListener('blur', validateLastName);
    inputLastName.addEventListener('focus', removeErrorLastName);

    inputDni.addEventListener('blur', validateDni);
    inputDni.addEventListener('focus', removeErrorDni);

    // inputDateOfBirth.addEventListener('blur', validateDateOfBirth);
    // inputDateOfBirth.addEventListener('focus', removeErrorDateOfBirth);

    // inputPhoneNumber.addEventListener('blur', validatePhoneNumber);
    // inputPhoneNumber.addEventListener('focus', removeErrorPhoneNumber);

    // inputAdress.addEventListener('blur', validateAdress);
    // inputAdress.addEventListener('focus', removeErrorAdress);

    // inputLocation.addEventListener('blur', validateLocation);
    // inputLocation.addEventListener('focus', removeErrorLocation);

    // inputPostalCode.addEventListener('blur', validatePostalCode);
    // inputPostalCode.addEventListener('focus', removeErrorPostalCode);

    // inputEmail.addEventListener('blur', validateEmail);
    // inputEmail.addEventListener('focus', removeErrorEmail);

    // inputPassword.addEventListener('blur', validatePassword);
    // inputPassword.addEventListener('focus', removeErrorPassword);

    // inputRepeatPassword.addEventListener('blur', validateRepeatPassword);
    // inputRepeatPassword.addEventListener('focus', removeErrorRepeatPassword);

    buttonSignUp.addEventListener('click', result);

    // Define the validation functions

    function validateName(e) {
        if(e.target.value.length >3){
            if(containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[0].style.visibility = 'visible';
                nameValidationRes = 'Invalid value';
            } else {
                nameValidationRes= e.target.value;
            }
        } else {
            error[0].style.visibility = 'visible';
            nameValidationRes = 'Invalid value';
        }
    }

    function removeErrorName(e) {
        error[0].style.visibility = 'hidden';
    }

    function validateLastName(e) {
        if(e.target.value.length >3){
            if(containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[1].style.visibility = 'visible';
                lastNameValidationRes = 'Invalid value';
            } else {
                lastNameValidationRes= e.target.value;
            }
        } else {
            error[1].style.visibility = 'visible';
            lastNameValidationRes = 'Invalid value';
        }
    }

    function removeErrorLastName(e) {
        error[1].style.visibility = 'hidden';
    }

    function validateDni(e) {
        if(e.target.value.length >7){
            if(isNaN(e.target.value) || isASymbol(e.target.value) ){
                error[2].style.visibility = 'visible';
                dniValidationRes = 'Invalid value';
            } else {
                dniValidationRes= e.target.value;
            }
        } else {
            error[2].style.visibility = 'visible';
            dniValidationRes = 'Invalid value';
        }
    }

    function removeErrorDni(e) {
        error[2].style.visibility = 'hidden';
    }

    // function validateDateOfBirth(e)
    // function removeErrorDateOfBirth(e) {
    //     error[3].style.visibility = 'hidden';
    // }

    // function validatePhoneNumber(e)
    // function removeErrorPhoneNumber(e) {
    //     error[4].style.visibility = 'hidden';
    // }

    // function validateAdress(e)
    // function removeErrorAdress(e) {
    //     error[5].style.visibility = 'hidden';
    // }

    // function validateLocation
    // function removeErrorLocation {
    //     error[6].style.visibility = 'hidden';
    // }

    // function validatePostalCode(e)
    // function removeErrorPostalCode(e) {
    //     error[7].style.visibility = 'hidden';
    // }

    // function validateEmail(e) {
    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
    //         emailValidationRes = e.target.value;
    //     } else {
    //         error[8].style.visibility = 'visible';
    //         emailValidationRes = 'Invalid value';
    //     }
    // }
    
    // function removeErrorEmail(e){
    //     error[8].style.visibility = 'hidden';
    // }

    // function validatePassword(e){
    //     e.preventDefault();
    //     if(e.target.value.length < 8){
    //         error[9].style.visibility = 'visible';
    //         passwordValidationRes = 'Invalid value';
    //     } else {
    //         passwordValidationRes = e.target.value;
    //     }
    // }

    // function removeErrorPassword(e) {
    //     error[9].style.visibility = 'hidden';
    // }

    // function validateRepeatPassword(e)
    // function removeErrorRepeatPassword(e) {
    //     error[10].style.visibility = 'hidden';
    // }

    //Check if there are digits in the string
    function containsNumber (string) {
        string = string.split(" ").join("");
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            }
        }
        //returns true if the string contains digits
        if (control == 0) {
            return false;
        } else {
            return true;
        }
    }

    //Check if there are special characters in the string
    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            for(var x=0;x < symbols.length;x++) {
                if (string[i] == symbols[x]) {
                    control ++;
                }
            }
        }
        //returns true if the string contains a special character
        if (control == 0) {
            return false;
        } else {
            return true;
        }
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