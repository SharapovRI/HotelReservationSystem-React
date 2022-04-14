import './HotelCreationInfo.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Formik, Form } from 'formik';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreationPhotoCarousel from '../../../Shared/CreationPhotoCarousel/CreationPhotoCarousel/CreationPhotoCarousel';
import checkHotelCreationHotelInfoData from '../../../../services/Validation/hotelCreationHotelInfoDataValidation';
import Tooltip from '@mui/material/Tooltip';

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
            const { address: addressPay, name: hotelNamePay, photos: hotelPhotosPay, city: cityPay, discription: discription } = hotelPayload;
            setAddress(addressPay);
            setHotelName(hotelNamePay);
            setHotelPhotos(hotelPhotosPay);
            setDiscription(discription);

            if (cityPay && appState.length > 0) {
                const currentLocate = appState[appState.findIndex((locate) => locate.city === cityPay)];
                setCity(currentLocate.id);
                setCountry(currentLocate.countryId);
                setCurValue(currentLocate);
            };
        }
    }, [hotelPayload, appState])

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
            discription: discription,
        }
        setHotelPayload(payload);
        setIsSubmited(true);
    }

    function getStyles(errors) {
        if (errors) {
            return {
                border: '1px solid red'
            }
        }
    }

    function validateCreatingParameters() {
        const values = {
            hotelName: hotelName,
            address: address,
            city: city,
        }
        const errors = checkHotelCreationHotelInfoData(values)
        return errors;
    }

    return (
        <Formik
            initialValues={{
                password: '',
            }}
            validate={validateCreatingParameters}
            onSubmit={submit}
        >
            {({ errors }) => (
                <Form id='deForm' className='hotelCreationInfo'>
                    <div className="hci_header">
                        <div className="hci_header_photo">
                            {hotelPhotos && hotelPhotos[0] &&
                                <img
                                    src={`data:${hotelPhotos[0]?.extension};base64,${hotelPhotos[0]?.data}`}
                                    alt={hotelPhotos[0].title}
                                    loading="lazy"
                                />
                            }
                        </div>
                        <div className="hci_header_main">
                            <Tooltip open={true} title={errors.hotelName} placement="bottom-start">
                                <div className='hotelInfoItem'>
                                    <label>Hotel name:</label>
                                    <TextField value={hotelName} variant="standard" onChange={onNameChange} 
                                        placeholder='Hotel name' style={getStyles(errors.hotelName)}/>
                                </div>
                            </Tooltip>
                            <div className="hci_hm_place_container">
                                <Tooltip open={true} title={errors.city} placement="bottom-start">
                                    <div className='hotelInfoItem item_margin'>
                                        <label>Hotel address:</label>
                                        <div className='addressContainer'>
                                            <Autocomplete className='comboBox' style={getStyles(errors.city)}
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
                                                getOptionLabel={(option) => option.country + ', ' + option.city}
                                                renderInput={(params) => (
                                                    <TextField {...params} placeholder="City" variant="standard">
                                                        {(option) => (option.country) + ', ' + option.city}
                                                    </TextField>
                                                )}
                                            />
                                        </div>
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.address} placement="bottom-start">
                                    <div className='hotelInfoItem flex_grow'>
                                        <label>Hotel address:</label>
                                        <TextField value={address} variant="standard" onChange={onAddressChange} 
                                            placeholder='Address' style={getStyles(errors.address)}/>
                                    </div>
                                </Tooltip>
                            </div>
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