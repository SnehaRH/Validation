document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

        clearErrors();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    let valid = true;

    if (fullName.length < 5) {
        showError('nameError', 'Full Name must be at least 5 characters');
        valid = false;
    }

    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email');
        valid = false;
    }

    if (phone === '123456789' || phone.length !== 10 || isNaN(phone)) {
        showError('phoneError', 'Enter a valid 10-digit phone number');
        valid = false;
    }

    if (password === 'password' || password === fullName || password.length < 8) {
        showError('passwordError', 'Password must be at least 8 characters and not be "password" or the same as your name');
        valid = false;
    }

    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}