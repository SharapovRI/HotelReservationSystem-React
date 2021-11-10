import React from 'react';
import { Formik, Form, Field } from 'formik';
import postRegistrate from '../../api/apiRequests/registration';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    let navigate = useNavigate();

    async function registrateClick(login, password, repeatedPassword)
    {        	
        const response = await postRegistrate(login, password, repeatedPassword);

        if (response)
        {
            localStorage.setItem("jwtToken", response.jwtToken);
            localStorage.setItem("refreshToken", response.refreshToken);
            console.log("Bearer " + localStorage.getItem("jwtToken"));
            navigate('/');
        }
    }

    return(
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={{
                    password: '',
                    repeatPassword: '',
                    login: '',
                }}
                validate={values => {
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
                if (!values.repeatPassword) {
                    errors.repeatPassword = 'Required';
                } else if (values.repeatPassword.length < 8) {
                    errors.repeatPassword = 'Password must be at least 8 letters';
                }

                if(values.password !== values.repeatPassword){
                    errors.password = 'Passwords doesn\'t match';
                    errors.repeatPassword = 'Passwords doesn\'t match';
                }

                return errors;
                }
                }
                onSubmit={values => {
                    registrateClick(values.login, values.password, values.repeatPassword)
                  }
                }
            >
                {({ errors }) => (
                  <Form>
                    <Field name="login" />
                    {errors.login  && <div>{errors.login}</div>}

                    <Field name="password" />
                    {errors.password  && <div>{errors.password}</div>}
                    <Field name="repeatPassword" />
                    {errors.repeatPassword  && <div>{errors.repeatPassword}</div>}

                    <button type="submit" >Submit</button>
                  </Form>
                )}
            </Formik>
        </div>
    )
};
export default RegistrationPage;