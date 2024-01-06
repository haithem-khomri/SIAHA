document.addEventListener('DOMContentLoaded', function () {

    var emailFocused = false;
    var passwordFocused = false;

    document.getElementById('login-email').addEventListener('input', function () {
        hideErrorMessage('emailError');
    });
    document.getElementById('email').addEventListener('focus', function () {
        emailFocused = true;
    });

    document.getElementById('login-pass').addEventListener('input', function () {
        hideErrorMessage('passwordError');
    });
    document.getElementById('password').addEventListener('focus', function () {
        passwordFocused = true;
    });

    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        validateForm(emailFocused, passwordFocused);
    });
});

function hideErrorMessage(elementId) {
    document.getElementById(elementId).innerText = '';
}

function validateForm() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-pass').value;

    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'يرجى إدخال البريد الإلكتروني';
        return false;
    } else if (!emailPattern.test(email.trim())) {
        document.getElementById('emailError').innerText = '   ادخل بريد إلكتروني صحيح';
        return false;
    }

    if (password.trim() === '') {
        document.getElementById('passwordError').innerText = 'يرجى إدخال كلمة المرور';
        return false;
    } else if (password.length < 8 || !/\d/.test(password)) {
        document.getElementById('passwordError').innerText = 'الكلمة غير مقبولة';
        return false;
    }

    // If validations pass, redirect to the desired page
    window.location.href = "dashboardStudent.html";
    return true;
}
/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('login-pass','login-eye')

