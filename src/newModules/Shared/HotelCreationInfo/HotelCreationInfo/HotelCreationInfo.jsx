import './HotelCreationInfo.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreationPhotoCarousel from '../../../Shared/CreationPhotoCarousel/CreationPhotoCarousel/CreationPhotoCarousel';

const HotelCreationInfo = ({ setHotelPayload, setIsSubmited, hotelPayload }) => {
    const [appState, setAppState] = useState([]);
    const [hotelPhotos, setHotelPhotos] = useState([]);
    const [hotelName, setHotelName] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState(0);
    const [city, setCity] = useState(0);
    const [discription, setDiscription] = useState('');

    const [curValue, setCurValue] = useState(null);

    useEffect(() => {
        if (hotelPayload) {
            const { address: addressPay, name: hotelNamePay, photos: hotelPhotosPay, city: cityPay } = hotelPayload;
            setAddress(addressPay);
            setHotelName(hotelNamePay);
            setHotelPhotos(hotelPhotosPay);

            if (cityPay && appState.length > 0) {
                const currentLocate = appState[appState.findIndex((locate) => locate.city === cityPay)];
                setCity(currentLocate.id);
                setCountry(currentLocate.countryId);
                setCurValue(currentLocate);
              };
        }
    }, [hotelPayload])

    useEffect(() => {
        const apiUrl = 'https://localhost:44382/Locates';
        axios.get(apiUrl)
            .then((resp) => {
                const allPersons = resp.data;
                setAppState(allPersons);
            })
            .catch(async function (error) {
                if (error.response) {

                }
            });
    }, [setAppState]);

    const onNameChange = (event) => {
        setHotelName(event.target.value);
    }

    const onAddressChange = (event) => {
        setAddress(event.target.value);
    }

    const onDiscriptionChange = (event) => {
        setDiscription(event.target.value);
    }

    function submit() {
        const payload = {
            cityId: city,
            countryId: country,
            address: address,
            name: hotelName,
            hotelPhotos: hotelPhotos,
        }
        setHotelPayload(payload);
        setIsSubmited(true);
    }

    return (
        <Formik
            initialValues={{
                password: '',
                login: '',
            }}
            //validate={checkLoginData}
            onSubmit={submit}
        >
            {({ errors }) => (
                <Form id='deForm' className='hotelCreationInfo'>
                    <div className='hotelInfoItem'>
                        <h4>Hotel name:</h4>
                        <TextField value={hotelName} variant="standard" onChange={onNameChange} placeholder='Hotel name' />
                    </div>
                    <div className='hotelInfoItem'>
                        <h4>Hotel address:</h4>
                        <div className='addressContainer'>
                            <Autocomplete className='comboBox'
                                options={appState}
                                clearOnEscape={true}
                                value={curValue}
                                onChange={(event, newValue) => {
                                    if (newValue !== null) {
                                        setCity(newValue.id);
                                        setCountry(newValue.countryId);
                                        setCurValue(newValue);
                                    }
                                    else {
                                        setCity('');
                                        setCountry('');
                                        setCurValue(null);
                                    }
                                }
                                }
                                getOptionLabel={(option) => option.id + ' ' + option.country + ', ' + option.city}
                                renderInput={(params) => (
                                    <TextField {...params} placeholder="City" variant="standard">
                                        {(option) => (option.country) + ', ' + option.city}
                                    </TextField>
                                )}
                            />
                            <TextField value={address} variant="standard" onChange={onAddressChange} placeholder='Address' />
                        </div>
                    </div>
                    <div>
                        <CreationPhotoCarousel photos={hotelPhotos} setPhotos={setHotelPhotos} />
                    </div>

                    <TextareaAutosize
                        value={discription}
                        placeholder="Discription"
                        onChange={onDiscriptionChange}
                        className='textInput'
                    />
                </Form>
            )}
        </Formik>
    )
}

export default HotelCreationInfo;