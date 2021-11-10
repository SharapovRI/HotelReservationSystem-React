const checkLoginData = (values) => {
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

    return errors;
}

export default checkLoginData;