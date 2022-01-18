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
        <>
            <div></div>
            <div class="container">
                <div class="col"></div>
                <div class="colCenter">
                    <div class="rowCenter">
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
                                    <div className='registrationInfoArea'>
                                    <div className='infoBlock'>
                                        <label>Login: </label>
                                        <Field name="login" />
                                        {errors.login && <div>{errors.login}</div>}
                                    </div>
                                    <div className='infoBlock'>
                                        <label>Password: </label>
                                        <Field name="password" />
                                        {errors.password && <div>{errors.password}</div>}
                                    </div>
                                    <div className='infoBlock'>
                                        <label>Repeat password: </label>
                                        <Field name="repeatPassword" />
                                        {errors.repeatedPassword && <div>{errors.repeatedPassword}</div>}
                                    </div>
                                    <div className='infoBlock'>
                                        <button type="submit" >Submit</button>
                                    </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        </div>
                    <div class="row"></div>
                </div>
                <div class="col"></div>
            </div>
        </>
    )
};
export default RegistrationPage;