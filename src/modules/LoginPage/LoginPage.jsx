import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
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
    <div class="container">
    <div class="transparent">
      <div class="row align-items-start">
        <div class="col"></div>
        <div class="col">
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
                <div class="mb-3">
                  <label for="inputLogin">Login</label>
                  <Field name="login" id="inputLogin" />
                  {errors.login && <div>{errors.login}</div>}
                </div>

                <div class="mb-3">
                  <label for="inputLogin">Password</label>
                  <Field name="password" />
                  {errors.password && <div>{errors.password}</div>}
                </div>
                <div>
                  <button type="submit">Submit</button>
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

export default LoginPage;
