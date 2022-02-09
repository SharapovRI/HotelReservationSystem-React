import React from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import postAuthenticate from '../../api/apiRequests/authentication';
import checkLoginData from '../../services/Validation/loginDataValidation';
import { addJwt } from '../../redux/Reducers/JWTreducer';
import { addRefresh } from '../../redux/Reducers/RefreshReducer';

import './LoginPage.scss';
import { makeStyles } from '@mui/styles';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function authorizeClick({ login, password }) {
        const response = await postAuthenticate(login, password);

        if (response) {
            dispatch(addJwt(response.jwtToken));
            dispatch(addRefresh(response.refreshToken));
            localStorage.setItem("jwtToken", response.jwtToken);
            localStorage.setItem("refreshToken", response.refreshToken);

            const path = localStorage.getItem("LastPath");
            if (path) {
                window.location.href = path;
            }
            else {
                navigate(`/Home`);
            }
        }
    }

    return (
        <div className='loginPage'>
            <h1>Sign In</h1>
            <Formik
                initialValues={{
                    password: '',
                    login: '',
                }}
                validate={checkLoginData}
                onSubmit={authorizeClick}
            >
                {({ errors }) => (
                    <Form>
                        <div className='infoBlock'>
                            <label for="inputLogin">Login</label>
                            <Field name="login" id="inputLogin" />
                            <div>
                                {errors.login && <p>{errors.login}</p>}
                            </div>
                        </div>

                        <div className='infoBlock'>
                            <label for="inputPassword">Password</label>
                            <Field name="password" type='password' id="inputPassword" />
                            {errors.password && <div>{errors.password}</div>}
                        </div>
                        <div className='infoBlock'>
                            <Button variant="contained" type="submit" className='submitButton'>Submit</Button>
                        </div>
                        <div className='infoBlock'>
                            <NavLink to='/Registration'>
                                <label>Registration</label>
                            </NavLink>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginPage;