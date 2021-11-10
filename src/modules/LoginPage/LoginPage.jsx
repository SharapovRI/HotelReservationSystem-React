import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import postAuthenticate from '../../api/apiRequests/authentication';
import checkLoginData from '../../services/Validation/loginDataValidation';


const LoginPage = () => {
  const navigate = useNavigate();

  async function authorizeClick({login, password})
  {    
    const response = await postAuthenticate(login, password);

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
            <Field name="login" />
            {errors.login  && <div>{errors.login}</div>}

            <Field name="password" />
            {errors.password  && <div>{errors.password}</div>}

            <button type="submit" >Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default LoginPage;
