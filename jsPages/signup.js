document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn').addEventListener('click', function (event) {
        event.preventDefault();
        validateForm();
    });
});

function validateForm() {
    
    clearErrorMessages();

     
    validateName();
    validateFname();
    validateSex();
    validateDate();
    validateEmail();
    validatePhone();
    validatePassword();
    validateCPassword();
    validateEducation();
    validateProgram();
    validateTelegram();
    validateComment();
}

function clearErrorMessages() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function (element) {
        element.textContent = '';
    });
}

function displayErrorMessage(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
}

function validateName() {
    const nameInput = document.querySelector('input[name="name"]');
    if (!/^[a-zA-Z]+$/.test(nameInput.value.trim())) {
        displayErrorMessage('nameError', 'الرجاء إدخال الاسم بشكل صحيح (فقط حروف)');
    }
}

function validateFname() {
    const fnameInput = document.querySelector('input[name="fname"]');
    if (!/^[a-zA-Z]+$/.test(fnameInput.value.trim())) {
        displayErrorMessage('fnameError', 'الرجاء إدخال اللقب بشكل صحيح (فقط حروف)');
    }
}
function validateSex() {
    const sexSelect = document.getElementById('sexSelect');
    if (sexSelect.value === '') {
        displayErrorMessage('sexError', 'الرجاء اختيار الجنس');
    }
}


function validateDate() {
    const dateInput = document.querySelector('input[type="date"]');
    const today = new Date();
    const inputDate = new Date(dateInput.value.trim());

    if (dateInput.value.trim() === '' || inputDate > today || today.getFullYear() - inputDate.getFullYear() < 6) {
        displayErrorMessage('dateError', 'الرجاء إدخال تاريخ ميلاد صحيح (عمرك يجب أن يكون 6 سنوات على الأقل)');
    }
}

function validateEmail() {
    const emailInput = document.querySelector('input[type="email"]');
    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        displayErrorMessage('emailError', 'الرجاء إدخال بريد إلكتروني صحيح');
    }
}

function validatePhone() {
    const phoneInput = document.querySelector('input[type="tel"]');
    const phonePattern = /^([0]{1}[5-7]{1}[0-9]{8})$/;
    if (!phonePattern.test(phoneInput.value.trim())) {
        displayErrorMessage('phoneError', 'الرجاء إدخال رقم هاتف صحيح');
    }
}

function validatePassword() {
    const passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput.value.length < 8 || !/\d/.test(passwordInput.value)) {
        displayErrorMessage('passwordError', 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل وعلى الأقل رقم واحد');
    }
}
 
function validateCPassword() {
    const passwordInput = document.querySelector('input[type="password"]');
    const cpasswordInput = document.querySelectorAll('input[type="password"]')[1];
    if (cpasswordInput.value.trim() !== passwordInput.value.trim()) {
        displayErrorMessage('cpasswordError', 'كلمة المرور غير متطابقة');
    }
}

function validateEducation() {
    const educationInput = document.querySelector('input[name="education"]');
    if (educationInput.value.trim() === '') {
        displayErrorMessage('educationError', 'الرجاء إدخال المستوى التعليمي');
    }
}

function validateProgram() {
    const programSelect = document.getElementById('programSelect');
    if (programSelect.value === '') {
        displayErrorMessage('programmError', 'الرجاء اختيار البرنامج');
    }
}
function validateTelegram() {
    const telegramInput = document.querySelector('input[name="telegram"]');
    if (!/^([0]{1}[5-7]{1}[0-9]{8})$/.test(telegramInput.value.trim())) {
        displayErrorMessage('telegramError', 'الرجاء إدخال رقم تيليغرام صحيح');
    }
}

function validateComment() {
    const commentInput = document.querySelector('input[name="comment"]');
    if (commentInput.value.trim() === '') {
        displayErrorMessage('commentError', 'الرجاء إدخال الرد على السؤال');
    }
}
