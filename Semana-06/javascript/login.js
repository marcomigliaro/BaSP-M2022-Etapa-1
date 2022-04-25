window.onload = function() {
    var form = document.querySelector('.log-in-form');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var error = document.querySelectorAll('.log-in-form p');
    var buttonLogIn = document.querySelector('button');
    var information = document.querySelector('.information');

    // console.log(form);
    // console.log(buttonLogIn);
    // console.log(information);
    // console.log(email);
    // console.log(email.value);
    // console.log(error[0]);

    // Result of the validations per field

    var emailValidationRes;
    var passwordValidationRes;

    // Add events to every one of the inputs
    
    inputEmail.addEventListener('blur', validateEmail);
    inputEmail.addEventListener('focus', removeEmail);

    inputPassword.addEventListener('blur', validatePassword);
    inputPassword.addEventListener('focus', removePassword);

    buttonLogIn.addEventListener('click', result);

    // Define the validation functions

    function validateEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            // console.log('Email valido');
            // console.log(e.target.value);
            emailValidationRes = e.target.value;
            return emailValidationRes;
        } else {
            error[0].style.display = 'flex';
            console.log('Email incorrecto');
            return false;
        }
    }

    function removeEmail(e){
        error[0].style.display = 'none';
    }

    function validatePassword(e){
        e.preventDefault();
        if(e.target.value.length < 8){
            error[1].style.display = 'flex';
            console.log('Password incorrecto');
        } else {
            passwordValidationRes = e.target.value;
            console.log(passwordValidationRes);
        }
    }

    function removePassword(e){
        error[1].style.display = 'none';
    }

    // Button

    function result(e){
        e.preventDefault();
        console.log('Button clicked');
        // buttonLogIn.style.color = 'blue';
        information.style.display = 'block';
        // var labelEmail = document.createElement('label');
        // //labelEmail.innerHTML = texto1;
        // console.log(labelEmail);
        // console.log(email);
        console.log(emailValidationRes);

        // button.style.backgroundcolor = 'blue';

    }

    // password.addEventListener('blur', e => {
    //     e.preventDefault();
    //     if(password.value.length <=8) {
    //         errorPass.style.display ="flex";
    //     }
    //     else {
    //         for(i of password.value) {
    //             if(!letterNumbers.includes(i)) {
    //                 errorPass.style.display ="flex";
    //             }
    //         }
    //     }
    // })


    console.log(emailValidationRes);

}