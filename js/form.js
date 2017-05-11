(function() {
    this.validateFormOnSubmit = function(form) {
        var error = '';
        error += validateEmail(form.email);
        error += validatePassword(form.password);

        if (error.length > 0) {
            alert(error);
        } else {
            alert('Login Success');
        }

        return false;
    };

    function validateEmail(email) {
        var error = '';
        if (email.value.length === 0) {
            email.className = email.className + ' has-error';
            error = '- Please enter your email \n';
        } else {
            email.className = email.className.replace(' has-error', '');
        }
        return error;
    }

    function validatePassword(password) {
        var error = '';
        var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@!%*#?&])[A-Za-z\d$@!%*#?&]{3,}$/i.test(password.value);
        if (!re) {
            error = '- Password must have least one special symbol, one number and one letter \n';
            password.className = password.className + ' has-error';
        } else {
            password.className = password.className.replace(' has-error', '');
        }
        return error;
    }
}());