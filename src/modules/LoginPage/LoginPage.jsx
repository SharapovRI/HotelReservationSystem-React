import React from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Button from '@mui/material/Button';
import postAuthenticate from '../../api/apiRequests/authentication';
import checkLoginData from '../../services/Validation/loginDataValidation';
import { addJwt } from '../../redux/Reducers/JWTreducer';
import { addRefresh } from '../../redux/Reducers/RefreshReducer';
import Tooltip from '@mui/material/Tooltip';

import './LoginPage.scss';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let errorMessage = '';

    async function authorizeClick({ login, password }) {
        errorMessage =  '';
        const response = await postAuthenticate(login, password);

        if (response) {
            dispatch(addJwt(response.jwtToken));
            dispatch(addRefresh(response.refreshToken));
            localStorage.setItem("jwtToken", response.jwtToken);
            localStorage.setItem("refreshToken", response.refreshToken);

            const path = localStorage.getItem("LastPath");
            if (path) {
                window.location.href = path;
                localStorage.removeItem("LastPath");
            }
            else {
                navigate(`/Home`);
            }
        }
        else {
            errorMessage = 'Login or password is incorrect';
        }
    }

    function getStyles(errors) {
        if (errors) {
            return {
                border: '1px solid red'
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
                validateOnBlur={false}
                validateOnChange={false}
            >
                {({ errors }) => (
                    <Form>
                        <Tooltip open={true} title={errors.login} placement="bottom-start">
                            <div className='infoBlock'>
                                <label for="inputLogin">Login</label>
                                <Field name="login" id="inputLogin" style={getStyles(errors.login)} />
                            </div>
                        </Tooltip>

                        <Tooltip open={true} title={errors.password} placement="bottom-start">
                            <div className='infoBlock'>
                                <label for="inputPassword">Password</label>
                                <Field name="password" type='password' id="inputPassword" style={getStyles(errors.password)} />
                            </div>
                        </Tooltip>
                        <Tooltip open={true} title={errorMessage} placement="right">
                            <div className='infoBlock'>
                                <Button variant="contained" type="submit" className='submitButton'>Submit</Button>
                            </div>
                        </Tooltip>
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