// step-1: add click handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){

    // steo-2: get the email address inside the email input field
    // always remeber to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // step-3: set password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;
    console.log(email,password)

    //------- DANGER: DO NOT VERYFIY EMAIL PASSWORD ON THE CLIENT SIDE-------
    // step-4: verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('dont forget password')
    }
})
