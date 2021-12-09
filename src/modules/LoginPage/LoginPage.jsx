import React from 'react';
import { Formik, Form, Field } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import postAuthenticate from '../../api/apiRequests/authentication';
import checkLoginData from '../../services/Validation/loginDataValidation';
import { useDispatch } from 'react-redux';
import { addJwt } from '../../redux/Reducers/JWTreducer';
import { addRefresh } from '../../redux/Reducers/RefreshReducer';
// import './styles.css';


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
            navigate(`/Hotels`);
        }
    }

    return (
        <>
            <div></div>
            <div class="container">
                <div class="col"></div>
                <div class="colCenter">
                    <div class="rowCenter">
                        <h1>SignIn</h1>
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
                                  <div className='loginInfoArea'>
                                    <div className='infoBlock'>
                                        <label for="inputLogin">Login</label>
                                        <Field name="login" id="inputLogin" />
                                        <div>
                                        {errors.login && <p>{errors.login}</p>}
                                        </div>
                                    </div>

                                    <div className='infoBlock'>
                                        <label for="inputPassword">Password</label>
                                        <Field name="password" type='password' id="inputPassword"/>
                                        {errors.password && <div>{errors.password}</div>}
                                    </div>
                                    <div className='infoBlock'>
                                        <button type="submit">Submit</button>
                                    </div>
                                    <div className='infoBlock'>
                                        <NavLink to='/Registration'>
                                            <label>Registration</label>
                                        </NavLink>
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

export default LoginPage;
