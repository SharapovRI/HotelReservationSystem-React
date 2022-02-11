const checkLoginData = (values) => {
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

    return errors;
}

export default checkLoginData;