document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const msg = document.getElementById("msg");

    // Validation rules
    if (password.length < 8) {
        msg.style.color = "red";
        msg.textContent = "Password must be at least 8 characters.";
        return;
    }
    if (!/[A-Z]/.test(password)) {
        msg.style.color = "red";
        msg.textContent = "Password must contain at least one capital letter.";
        return;
    }
    if (!/[0-9]/.test(password)) {
        msg.style.color = "red";
        msg.textContent = "Password must contain at least one number.";
        return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        msg.style.color = "red";
        msg.textContent = "Password must contain at least one special character.";
        return;
    }
    // password match
    if (password !== confirmPassword) {
        msg.style.color = "red";
        msg.textContent = "Passwords do not match.";
        return;
    }

    msg.style.color = "green";
    msg.textContent = "Signup Successful! Redirecting to Login...";
    setTimeout(function () {
        window.location.href = "login.html";
    }, 2000);
});
