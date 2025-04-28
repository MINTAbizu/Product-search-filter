
document.getElementById("Register_form").addEventListener('submit', function(event) {
    event.preventDefault();

    var firstname = document.getElementById('firstname').value.trim();
    var lastname = document.getElementById('lastname').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var registererror = document.getElementById('Register_error');
    registererror.textContent = '';

    // Check for empty fields
    
    if (!firstname || !lastname || !email || !password) {
        registererror.innerText = "Please provide all required information.";
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        registererror.innerText = "Please enter a valid email address.";
        return;
    }

    // Check password length
    if (! isPasswordStrong(password)) {
        registererror.innerText = "Password must be at least 6 characters long and include at least one number, one special character, and one uppercase letter.";
        return;
    }

    // If everything is valid
    alert("Registration successful!");
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
function isPasswordStrong(password) {
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return strongPasswordPattern.test(password);
}


// send data to dtabase 

fetch('/registeruser',{
 method:'post',
    headers:{'content-type':'Application.json'},
    body:JSON.stringify({firstname, lastname, email,password})

    .then((Response=>Response.JSON()))
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else {
            registererror.innerText = data.error;
        }
    })
    .catch(error => {
        registererror.innerText = "Error: " + error.message;
    })
})
