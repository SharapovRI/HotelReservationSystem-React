import './SearchArea.scss';
import React, { useState } from 'react';
import DatePickerRange from '../DatePickerRange/DatePickerRange';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import ComboBox from '../../../Shared/ComboBox/ComboBox';
import Button from '@mui/material/Button';
import { Formik, Form } from 'formik';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';
import checkHomePageSearchingData from '../../../../services/Validation/homePageSearchingDataValidation';

const SearchArea = ({ setFilter }) => {
    const [date, setDate] = useState([new Date(), (new Date()).setDate(new Date().getDate() + 1)]);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [seatsCount, setSeatsCount] = useState(0);

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
        if (event.target.value < 0) {
            setSeatsCount(0);
        }
        else {
            setSeatsCount(event.target.value);
        }
    }

    function getStyles(errors) {
        if (errors) {
            return {
                border: '1px solid red'
            }
        }
    }

    function validateSearchingParameters() {
        const values = {
            date: date,
            city: city,
            seats: seatsCount,
        }
        const errors = checkHomePageSearchingData(values);
        return errors;
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
                    city: -1,
                    date: [],
                }}
                validate={validateSearchingParameters}
                onSubmit={searchHotels}

            >
                {({ errors }) => (
                    <Form className='searchAreaForm'>
                        <Tooltip open={true} title={errors.city} style={{zIndex: 0}}>
                            <div className='searchAreaItem' name='cityPicker' style={getStyles(errors.city)}>
                                <ComboBox className='cbLocates'
                                    setOption={(newValue) => setCity(newValue)}
                                    setCountry={(newValue => setCountry(newValue))}
                                    boxText={(option) => (option.country) + ', ' + option.city}
                                    getOptionLabel={(option) => option.country + ', ' + option.city}
                                    labelText='Locates'
                                />
                            </div>
                        </Tooltip>
                        <div className='searchAreaItem'>
                            <DatePickerRange date={date} setDate={(newValue) => setDate(newValue)} />
                        </div>
                        <Tooltip open={errors.seats && true} title={errors.seats}>
                            <div className='searchAreaItem'>
                                <TextField id="outlined-basic"
                                    type={'number'}
                                    value={seatsCount}
                                    onInput={onSeatsChange}
                                    label="Seats Count"
                                    variant="outlined"
                                />
                            </div>
                        </Tooltip>
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