import './RegistrationPage.scss';
import { Formik, Form, Field } from 'formik';
import postRegistrate from '../../../api/apiRequests/registration';
import { useNavigate } from 'react-router-dom';
import checkRegistrationData from '../../../services/Validation/registrationDataValidation';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { addJwt } from '../../../redux/Reducers/JWTreducer';
import { addRefresh } from '../../../redux/Reducers/RefreshReducer';

const RegistrationPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let errorMessage = '';

    async function registrateClick({ login, password, repeatedPassword }) {
        errorMessage = '';
        const response = await postRegistrate(login, password, repeatedPassword);

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
            errorMessage = 'This login already exist';
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
                    validateOnBlur={false}
                    validateOnChange={false}
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
                                        <Field name="password" type='password' />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.repeatedPassword} placement="bottom-start">
                                    <div className='infoBlock'>
                                        <label>Repeat password: </label>
                                        <Field name="repeatedPassword" type='password' />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errorMessage} placement="right">
                                    <div className='infoBlock'>
                                        <Button variant="contained" type="submit" className='submitButton'>Submit</Button>
                                    </div>
                                </Tooltip>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    )
};

export default RegistrationPage;