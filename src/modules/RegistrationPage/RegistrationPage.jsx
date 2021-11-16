import React from 'react';
import { Formik, Form, Field } from 'formik';
import postRegistrate from '../../api/apiRequests/registration';
import { useNavigate } from 'react-router-dom';
import checkRegistrationData from '../../services/Validation/registrationDataValidation';

const RegistrationPage = () => {
    const navigate = useNavigate();

    async function registrateClick({ login, password, repeatedPassword }) {
        const response = await postRegistrate(login, password, repeatedPassword);

        if (response) {
            localStorage.setItem("jwtToken", response.jwtToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            navigate('/');
        }
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={{
                    password: '',
                    repeatedPassword: '',
                    login: '',
                }}
                validate={checkRegistrationData}
                onSubmit={registrateClick}
            >
                {({ errors }) => (
                    <Form>
                        <Field name="login" />
                        {errors.login && <div>{errors.login}</div>}

                        <Field name="password" />
                        {errors.password && <div>{errors.password}</div>}

                        <Field name="repeatPassword" />
                        {errors.repeatedPassword && <div>{errors.repeatedPassword}</div>}

                        <button type="submit" >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};
export default RegistrationPage;