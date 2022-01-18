import './HotelInfoArea.scss';

import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import ComboBox from '../../../../../Shared/ComboBox/ComboBox';

const HotelInfoArea = ({ setHotelData }) => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [address, setAddress] = useState('');
    const [hotelName, setHotelName] = useState('');

    const onAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const onNameChange = (event) => {
        setHotelName(event.target.value);
    }

    useEffect(() => {
        setHotelData({
            cityId: city,
            address: address,
            name: hotelName,
            countryId: country,
        })
    }, [city, address, hotelName,])

    return (
        <div className='hotelInfoArea'>
            <div className='infoItem'>
                <ComboBox className='cbLocates' option={city}
                    setOption={(newValue) => setCity(newValue)}
                    setCountry={(newValue => setCountry(newValue))}
                    boxText={(option) => (option.country) + ', ' + option.city}
                    getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                    labelText='Locates'
                />
            </div>
            <div className='infoItem'>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={address}
                    onInput={onAddressChange}
                    label="Address"
                    variant="outlined"
                    style={{width: '80%'}}
                />
            </div>
            <div className='infoItem'>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={hotelName}
                    onInput={onNameChange}
                    label="Hotel Name"
                    variant="outlined"
                    style={{width: '80%'}}
                />
            </div>
        </div>
    )
}

export default HotelInfoArea;