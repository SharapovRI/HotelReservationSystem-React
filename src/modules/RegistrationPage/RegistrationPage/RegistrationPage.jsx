import './RegistrationPage.scss';
import { Formik, Form, Field } from 'formik';
import postRegistrate from '../../../api/apiRequests/registration';
import { useNavigate } from 'react-router-dom';
import checkRegistrationData from '../../../services/Validation/registrationDataValidation';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

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
            <div className="registration_page">
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
                                <Tooltip open={true} title={errors.login} placement="bottom-start">
                                    <div className='infoBlock'>
                                        <label>Login: </label>
                                        <Field name="login" />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.password} placement="bottom-start">
                                    <div className='infoBlock'>
                                        <label>Password: </label>
                                        <Field name="password" />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.repeatedPassword} placement="bottom-start">
                                    <div className='infoBlock'>
                                        <label>Repeat password: </label>
                                        <Field name="repeatedPassword" />
                                    </div>
                                </Tooltip>
                                <div className='infoBlock'>
                                    <Button variant="contained" type="submit" className='submitButton'>Submit</Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
};

export default RegistrationPage;