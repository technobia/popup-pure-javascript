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
        var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(email.value);
        if (!re) {
            email.className = email.className + ' has-error';
            error = '- Email not correct \n';
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