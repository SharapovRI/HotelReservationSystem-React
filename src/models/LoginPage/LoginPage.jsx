import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import postAuthenticate from '../../api/apiRequests/authentication';


const LoginPage = () => {
  let navigate = useNavigate();

  async function authorizeClick(login, password)
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

          return errors;
          }
        }
        onSubmit={values => {
            authorizeClick(values.login, values.password)
          }
        }
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
