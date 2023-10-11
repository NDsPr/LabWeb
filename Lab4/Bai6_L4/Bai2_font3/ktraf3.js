function validateForm() {
    // Reset error messages
    resetErrors();

    // Get form inputs
    const fullName = document.querySelector('.form-input[placeholder="  Full Name"]').value;
    const email = document.querySelector('.form-input[placeholder="  Email Adress"]').value;
    const password = document.querySelector('.form-input[placeholder="  Password"]').value;
    const day = document.querySelector('.form-date[placeholder="     DD"]').value;
    const month = document.querySelector('.form-date[placeholder="     MM"]').value;
    const year = document.querySelector('.form-year[placeholder="     YYYY"]').value;
    const gender = document.querySelector('.in_gender:checked');
    const cardNumber = document.querySelector('.form-input[placeholder="  Card Number"]').value;
    const cardCVC = document.querySelector('.form-input[placeholder=" Card CVC"]').value;
    const acceptTerms = document.getElementById('accept_terms').checked;

    // Validate Full Name (no numbers)
    if (!isValidFullName(fullName)) {
        displayError('full_name_error', 'Full Name should not contain numbers.');
        return;
    }

    // Validate Email
    if (!isValidEmail(email)) {
        displayError('email_error', 'Invalid Email Address.');
        return;
    }

    // Validate Password (you might want to add more specific criteria)
    if (password.length < 6) {
        displayError('password_error', 'Password should be at least 6 characters.');
        return;
    }

    // Validate Date of Birth
    if (!isValidDate(day, month, year)) {
        displayError('dob_error', 'Invalid Date of Birth.');
        return;
    }

    // Validate Gender
    if (!gender) {
        // Assuming you have a default selected gender or prompt the user to select one
        displayError('dob_error', 'Please select a gender.');
        return;
    }
    // Validate Card Type
    const selectedCardType = document.querySelector('.form-payment input:checked');
    if (!selectedCardType) {
        displayError('card_number_error', 'Please select a card type.');
        return;
    }
    // Validate Card Number
    if (!isValidCardNumber(cardNumber)) {
        displayError('card_number_error', 'Invalid Card Number.');
        return;
    }

    // Validate Card CVC (you might want to add more specific criteria)
    if (cardCVC.length !== 3) {
        displayError('card_number_error', 'Invalid Card CVC.');
        return;
    }

    // Validate Terms and Conditions acceptance
    if (!acceptTerms) {
        displayError('accept_terms_error', 'You must accept the Terms and Conditions.');
        return;
    }

    // If all validations pass, you can submit the form or perform further actions
    alert('Form submitted successfully!');
}

function resetErrors() {
    // Reset all error messages
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach((element) => {
        element.textContent = '';
    });
}

function displayError(errorId, errorMessage) {
    // Display error message and highlight the corresponding form group
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('error-message');
}

function isValidFullName(name) {
    // Check if the name contains any numbers
    return !/\d/.test(name);
}

function isValidEmail(email) {
    // Very basic email validation, you might want to use a regex or a library for a more robust check
    return /\S+@\S+\.\S+/.test(email);
}

function isValidDate(day, month, year) {
    // Very basic date validation, you might want to use a library like moment.js for more complex checks
    const date = new Date(`${year}-${month}-${day}`);
    return !isNaN(date.getTime());
}

function isValidCardNumber(cardNumber) {
    // Very basic card number validation, you might want to use a more advanced algorithm or a library
    return /^\d{16}$/.test(cardNumber);
}
