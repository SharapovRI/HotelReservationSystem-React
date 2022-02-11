import './SearchingArea.scss'

import { Formik, Form, Field } from 'formik';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import ComboBox from '../../../Shared/ComboBox/ComboBox'
import DatePickerRange from '../../../Shared/DatePickerRange/DatePickerRange';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router-dom'
import checkHomePageSearchingData from '../../../../services/Validation/homePageSearchingDataValidation';
import Tooltip from '@mui/material/Tooltip';

const SearchingArea = ({ setFilter }) => {
    const [date, setDate] = useState([new Date(), (new Date()).setDate(new Date().getDate() + 1)]);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [seatsCount, setSeatsCount] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const [called, setCalled] = useState(false);

    useEffect(() => {
        let checkIn = new Date(searchParams.get('checkIn')).toJSON();
        let checkOut = new Date(searchParams.get('checkOut')).toJSON();

        if (getNumberOfDays(checkIn, checkOut) < 1) {
            checkOut = (new Date()).setDate(new Date(checkIn).getDate() + 1);
        }

        const seats = searchParams.get('freeSeatsCount');
        if (seats < 1) {
            setSeatsCount(1);
        }
        else {
            setSeatsCount(seats);
        }

        setCity(searchParams.get('cityId'));
        setCountry(searchParams.get('countryId'));
        setDate([new Date(checkIn).toJSON(), new Date(checkOut).toJSON()]);
        setCalled(true);
    }, [setCity]);

    useEffect(() => {
        if (called) {
            searchHotels();
        }
    }, [called])

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
        setSearchParams(payload);
    }

    const onSeatsChange = (event) => {
        if (event.target.value < 0) {
            setSeatsCount(0);
        }
        else {
            setSeatsCount(event.target.value);
        }
    }

    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
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
        <div className='srp_searching_area'>
            <h2 className='srp_sa_header'>Search</h2>
            <Formik
                initialValues={{
                    password: '',
                    login: '',
                }}
                validate={validateSearchingParameters}
                onSubmit={searchHotels}
            >
                {({ errors }) => (
                    <Form className='srp_searching_area_form'>
                        <Tooltip open={true} title={errors.city} placement="bottom-end" style={{ zIndex: 0 }}>
                            <div className="srp_saf_item">
                                <label className='saf_item_label'>Search location</label>
                                <ComboBox className='cbLocates' cityId={city}
                                    setOption={(newValue) => setCity(newValue)}
                                    setCountry={(newValue => setCountry(newValue))}
                                    boxText={(option) => (option.country) + ', ' + option.city}
                                    getOptionLabel={(option) => option.country + ', ' + option.city}
                                    labelText='Locates'
                                />
                            </div>
                        </Tooltip>
                        <div className="srp_saf_item">
                            <DatePickerRange date={date} setDate={(newValue) => setDate(newValue)} />
                        </div>
                        <Tooltip open={true} title={errors.seats}>
                            <div className="srp_saf_item">
                                <label className='saf_item_label'>Seats count</label>
                                <TextField id="outlined-basic"
                                    className='seatsCountField'
                                    type={'number'}
                                    value={seatsCount}
                                    onInput={onSeatsChange}
                                    variant="outlined"
                                    style={getStyles(errors.seats)}
                                />
                            </div>
                        </Tooltip>
                        <div className='srp_saf_buttons'>
                            <Button variant="contained" type="submit" className='submitButton'>Search</Button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SearchingArea;