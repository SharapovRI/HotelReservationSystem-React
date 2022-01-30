import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import ComboBox from '../../../Shared/ComboBox/ComboBox';
import { useSearchParams } from 'react-router-dom';
import getHotels from '../../../../api/apiRequests/getHotels';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';

import './SearchArea.scss';
import axios from 'axios';

const SearchArea = ({ setFilter, setContent, setPageCount }) => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const [hotelName, setHotelName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        searchHotels();
    }, [])

    async function searchHotels() {
        const payload = {
            cityId: city,
            countryId: country,
            namePart: hotelName,
            size: 5
        };
        setFilter(payload);
        setSearchParams(payload);

        const data = await getHotels({ ...payload, index: 0 });

        setContent(data.result);
        setPageCount(data.pageCount);

        //const path = axios.getUri({ url: `/Hotels`, params: payload });
        //navigate(path);
    }

    const onTextChange = (event) => {
        setHotelName(event.target.value);
    }

    return (
        <div className='adminSearchAreaContainer'>
            <Formik
                initialValues={{
                    password: '',
                    login: '',
                }}
                //validate={checkLoginData}
                onSubmit={searchHotels}
            >
                {({ errors }) => (
                    <Form className='adminSearchAreaForm'>
                        <div className='adminSearchAreaItem'>
                            <ComboBox className='cbLocates'
                                setOption={(newValue) => setCity(newValue)}
                                setCountry={(newValue => setCountry(newValue))}
                                boxText={(option) => (option.country) + ', ' + option.city}
                                getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                                labelText='Locates'
                            />
                        </div>
                        <div className='adminSearchAreaItem'>
                            <TextField id="outlined-basic"
                                type={'text'}
                                defaultValue={hotelName}
                                onInput={onTextChange}
                                label="Hotel name"
                                variant="outlined"
                            />
                        </div>
                        <div className='adminSearchAreaItem'>
                            <Button variant="contained" type="submit" className='submitButton'>Search</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SearchArea;