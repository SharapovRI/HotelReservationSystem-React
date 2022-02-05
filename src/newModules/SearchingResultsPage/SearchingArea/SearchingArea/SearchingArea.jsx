import './SearchingArea.scss'

import { Formik, Form, Field } from 'formik';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import ComboBox from '../../../Shared/ComboBox/ComboBox'
import DatePickerRange from '../DatePickerRange/DatePickerRange';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router-dom'

import getHotels from '../../../../api/apiRequests/getHotels';

const SearchingArea = ({ setFilter, setContent, setPageCount }) => {
    const [date, setDate] = useState([new Date(), new Date()]);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [seatsCount, setSeatsCount] = useState(0);

    const [searchParams, setSearchParams] = useSearchParams();

    const [called, setCalled] = useState(false);

    useEffect(() => {
        setCity(searchParams.get('cityId'));
        setCountry(searchParams.get('countryId'));
        setSeatsCount(searchParams.get('freeSeatsCount'));
        setDate([searchParams.get('checkIn'), searchParams.get('checkOut')]);
        setCalled(true);
    }, []);

    useEffect(() => {
        if (called)
        {
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
        //setSearchParams(payload);

        const data = await getHotels({ ...payload, index: 0 });

        setContent(data.result);
        setPageCount(data.pageCount);
    }

    const onSeatsChange = (event) => {
        setSeatsCount(event.target.value);
    }

    return (
        <div className='searchingAreaP'>
            <h2>Search</h2>
            <Formik
                initialValues={{
                    password: '',
                    login: '',
                }}
                //validate={checkLoginData}
                onSubmit={searchHotels}
            >
                {({ errors }) => (
                    <Form className='searchingAreaPForm'>
                        <ComboBox className='cbLocates' cityId={city}
                            setOption={(newValue) => setCity(newValue)}
                            setCountry={(newValue => setCountry(newValue))}
                            boxText={(option) => (option.country) + ', ' + option.city}
                            getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                            labelText='Locates'
                        />
                        <DatePickerRange date={date} setDate={(newValue) => setDate(newValue)} />
                        <TextField id="outlined-basic"
                            className='seatsCountField'
                            type={'number'}
                            value={seatsCount}
                            onInput={onSeatsChange}
                            label="Seats Count"
                            variant="outlined"
                        />
                        <div>
                            <Button variant="contained" type="submit" className='submitButton'>Search</Button>
                        </div>

                    </Form>
                )}
            </Formik>   
        </div>
    )
}

export default SearchingArea;