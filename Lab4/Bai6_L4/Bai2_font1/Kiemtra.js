function validateForm() {
    // Lấy giá trị từ các trường
    var fullName = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var neededServices = document.getElementById('needed_services').value;

    // Kiểm tra dữ liệu và hiển thị thông báo nếu cần
    if (
        !validateFullName(fullName) ||
        !validateEmail(email) ||
        !validatePhoneNumber(phone, 'phone', 'phone_error', 'Please enter a valid phone number') ||
        !validateField(neededServices, 'needed_services', 'needed_services_error', 'Please choose a service')
    ) {
        document.getElementById('error_message').textContent = 'Please fix the errors before submitting.';
    } else {
        document.getElementById('error_message').textContent = '';
        // Submit form or perform other actions if validation passes
    }
}

function validatePhoneNumber(value, fieldId, errorId, errorMessage) {
    // Kiểm tra dữ liệu và hiển thị thông báo nếu cần
    var errorElement = document.getElementById(errorId);
    var hasAlphabet = /[a-zA-Z]/.test(value);

    if (value.trim() === '') {
        errorElement.textContent = errorMessage;
        document.getElementById(fieldId).style.border = '1px solid red';
        return false;
    } else if (hasAlphabet) {
        errorElement.textContent = 'Invalid phone number. Please enter digits only.';
        document.getElementById(fieldId).style.border = '1px solid red';
        return false;
    } else {
        errorElement.textContent = '';
        document.getElementById(fieldId).style.border = '1px solid #ccc';
        return true;
    }
}


function validateEmail(email) {
    // Kiểm tra định dạng email hợp lệ
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').textContent = 'Please enter a valid email address.';
        document.getElementById('email').style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('email_error').textContent = '';
        document.getElementById('email').style.border = '1px solid #ccc';
        return true;
    }
}

function validateFullName(fullName) {
    // Kiểm tra xem "FULL NAME" có chứa số hay không
    var hasNumber = /\d/.test(fullName);

    if (fullName.trim() === '') {
        document.getElementById('full_name_error').textContent = 'Please enter your full name';
        document.getElementById('full_name').style.border = '1px solid red';
        return false;
    } else if (hasNumber) {
        document.getElementById('full_name_error').textContent = 'Full name should not contain numbers.';
        document.getElementById('full_name').style.border = '1px solid red';
        return false;
    } else {
        document.getElementById('full_name_error').textContent = '';
        document.getElementById('full_name').style.border = '1px solid #ccc';
        return true;
    }
}
function displayError(errorId, errorMessage) {
    // Display error message and highlight the corresponding form group
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = errorMessage;
    errorElement.style.color = 'red';  // Set text color to red
}
