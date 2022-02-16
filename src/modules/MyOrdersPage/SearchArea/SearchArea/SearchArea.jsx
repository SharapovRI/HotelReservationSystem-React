import './SearchArea.scss';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Formik, Form, Field } from 'formik';
import ComboBox from '../../../Shared/ComboBox/ComboBox';
import { useEffect, useState } from 'react';
import TimeComboBox from '../TimeComboBox/TimeComboBox/TimeComboBox';

const SearchArea = ( { setFilter } ) => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [hotelName, setHotelName] = useState('');
    const [time, setTime] = useState();

    const onTextChange = (event) => {
        setHotelName(event.target.value);
    }

    useEffect(() => {
        const filter = {
            cityId:city,
            hotelNamePart:hotelName,
            whichTime:time,
            size:4,
        }
        setFilter(filter);
    }, [setFilter])

    function getMyOrders() {
        const filter = {
            cityId:city,
            hotelNamePart:hotelName,
            whichTime:time,
            size:4,
        }
        setFilter(filter);
    }

    return (
        <Formik
            initialValues={{
                password: '',
                login: '',
            }}
        //validate={checkLoginData}
        onSubmit={getMyOrders}                
        >
            {({ errors }) => (
                <Form className='horizontal_search_area_form'>
                    <div className='hsaf_item'>
                        <ComboBox className='cbLocates'
                            setOption={(newValue) => setCity(newValue)}
                            setCountry={(newValue => setCountry(newValue))}
                            boxText={(option) => (option.country) + ', ' + option.city}
                            getOptionLabel={(option) => option.country + ', ' + option.city}
                            labelText='Locates'
                        />
                    </div>
                    <div className='hsaf_item'>
                        <TextField
                            type={'text'}
                            defaultValue={hotelName}
                            onInput={onTextChange}
                            placeholder="Hotel name"
                            variant="outlined"
                        />
                    </div>
                    <div className='hsaf_item'>
                        <TimeComboBox setTime={setTime}/>
                    </div>
                    <div className='hsaf_item'>
                        <Button variant="contained" type="submit" className='submitButton'>Search</Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default SearchArea;