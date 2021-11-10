const checkRegistrationData = (values) => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Required';
    } else if (values.login.length < 8) {
        errors.login = 'Login must be at least 8 letters';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 letters';
    }
    if (!values.repeatedPassword) {
        errors.repeatPassword = 'Required';
    } else if (values.repeatedPassword.length < 8) {
        errors.repeatPassword = 'Password must be at least 8 letters';
    }

    if (values.password !== values.repeatedPassword) {
        errors.password = 'Passwords doesn\'t match';
        errors.repeatPassword = 'Passwords doesn\'t match';
    }

    return errors;
}

export default checkRegistrationData;