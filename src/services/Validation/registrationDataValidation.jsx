const checkRegistrationData = (values) => {
    const errors = {};
    if (!values.login) {
        errors.login = 'This field can\t be empty';
    } else if (values.login.length < 8) {
        errors.login = 'Login must be at least 8 letters';
    }

    if (!values.password) {
        errors.password = 'This field can\t be empty';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 letters';
    }

    if (!values.repeatedPassword) {
        errors.repeatedPassword = 'This field can\t be empty';
    } else if (values.repeatedPassword.length < 8) {
        errors.repeatedPassword = 'Password must be at least 8 letters';
    }

    if (values.password !== values.repeatedPassword) {
        errors.password = 'Passwords doesn\'t match';
        errors.repeatedPassword = 'Passwords doesn\'t match';
    }

    return errors;
}

export default checkRegistrationData;