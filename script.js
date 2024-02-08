document.addEventListener('DOMContentLoaded', function() {
    // Adding event listeners to input fields
    document.getElementById("username").addEventListener("input", validateUsername);
    document.getElementById("email").addEventListener("input", validateEmail);
    document.getElementById("confirmEmail").addEventListener("input", validateConfirmEmail);
    document.getElementById("password").addEventListener("input", validatePassword);

    // Initially disable the submit button
    document.getElementById("submitBtn").disabled = true;
});

function validateUsername() {
    var username = document.getElementById("username").value;

    // Validate username
    // For simplicity, let's just check if it's not empty
    var isValid = username.trim() !== "";

    toggleValidationMessage("username", isValid);
    validateForm();
}

function validateEmail() {
    var email = document.getElementById("email").value;

    // Validate email
    var isValid = isValidEmail(email);

    toggleValidationMessage("email", isValid);
    validateForm();
}

function validateConfirmEmail() {
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;

    // Validate confirm email
    var isValid = confirmEmail === email && isValidEmail(confirmEmail);

    toggleValidationMessage("confirmEmail", isValid);
    validateForm();
}

function validatePassword() {
    var password = document.getElementById("password").value;

    // Validate password
    var isValid = password.length >= 8;

    toggleValidationMessage("password", isValid);
    validateForm();
}

function toggleValidationMessage(field, isValid) {
    var errorElement = document.getElementById(field + "Error");

    if (!isValid) {
        errorElement.textContent = "Please enter a valid " + field;
        errorElement.classList.remove('success');
        errorElement.classList.add('error');
    } else {
        errorElement.textContent = "";
        errorElement.classList.remove('error');
        errorElement.classList.add('success');
    }
}

function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var password = document.getElementById("password").value;
    var submitBtn = document.getElementById("submitBtn");

    // Enable or disable the submit button based on validation results
    var isValid = username.trim() !== "" &&
                  isValidEmail(email) &&
                  confirmEmail === email &&
                  isValidEmail(confirmEmail) &&
                  password.length >= 8;

    submitBtn.disabled = !isValid;
}

function isValidEmail(email) {
    // Very basic email validation
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
