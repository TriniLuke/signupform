//A function that validates that the input of password matches confirm-password to give access
function Validate() {
    const password = document.querySelector('.password').value;
    const confirmPassword = document.querySelector('.confirm-password').value;
    if (password != confirmPassword) {
        let error = document.getElementById('wrong-pass-alert').textContent = '* Please enter the same password';
        return false;
    } else {
        document.querySelector('input[type=password]').style.border = '1px solid green';
    return true;
}}
