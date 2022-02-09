import React, { useState } from 'react';
import DatePickerRange from '../DatePickerRange/DatePickerRange';
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
    const [date, setDate] = useState([new Date(), new Date()]);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [seatsCount, setSeatsCount] = useState(0);
    const [searchParams, setSearchParams] = useSearchParams();

    const navigate = useNavigate();

    async function searchHotels() {
        const payload = {
            cityId: Number(city),
            countryId: Number(country),
            checkIn: new Date(date[0]).toJSON(),
            checkOut: new Date(date[1]).toJSON(),
            freeSeatsCount: Number(seatsCount),
            size: 5,
        };
        setFilter(payload);

        const path = axios.getUri({ url: `/Hotels`, params: payload });
        navigate(path);
    }

    const onSeatsChange = (event) => {
        setSeatsCount(event.target.value);
    }

    return (
        <div className='searchAreaContainer'>
            <div className="page_header">
                <div className='ph_title'>
                    Find accommodation for a new trip
                </div>
                <div className='ph_subtitle'>
                    Find exclusive rooms in just a couple of clicks
                </div>
            </div>
            <Formik
                initialValues={{
                    password: '',
                    login: '',
                }}
                //validate={checkLoginData}
                onSubmit={searchHotels}
            >
                {({ errors }) => (
                    <Form className='searchAreaForm'>
                        <div className='searchAreaItem'>
                            <ComboBox className='cbLocates'
                                setOption={(newValue) => setCity(newValue)}
                                setCountry={(newValue => setCountry(newValue))}
                                boxText={(option) => (option.country) + ', ' + option.city}
                                getOptionLabel={(option) => option.country + ', ' + option.city}
                                labelText='Locates'
                            />
                        </div>
                        <div className='searchAreaItem'>
                            <DatePickerRange date={date} setDate={(newValue) => setDate(newValue)} />
                        </div>
                        <div className='searchAreaItem'>
                            <TextField id="outlined-basic"
                                type={'number'}
                                defaultValue={seatsCount}
                                onInput={onSeatsChange}
                                label="Seats Count"
                                variant="outlined"
                            />
                        </div>
                        <div className='searchAreaItem'>
                            <Button variant="contained" type="submit" className='submitButton'>Search</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SearchArea;