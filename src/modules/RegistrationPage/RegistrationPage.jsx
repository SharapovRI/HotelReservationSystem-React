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
        <div class="container">
            <div class="transparent">
                <div class="row align-items-start">
                    <div class="col"></div>
                    <div class="col">
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
                                    <div class="mb-3">
                                        <h2>Login: </h2>
                                        <Field name="login" />
                                        {errors.login && <div>{errors.login}</div>}
                                    </div>
                                    <div class="mb-3">
                                        <h2>Password: </h2>
                                        <Field name="password" />
                                        {errors.password && <div>{errors.password}</div>}
                                    </div>
                                    <div class="mb-3">
                                        <h2>Repeat password: </h2>
                                        <Field name="repeatPassword" />
                                        {errors.repeatedPassword && <div>{errors.repeatedPassword}</div>}
                                    </div>
                                    <div>
                                        <button type="submit" >Submit</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    )
};
export default RegistrationPage;