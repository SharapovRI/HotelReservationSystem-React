import { useState } from "react";
import ComboBox from "../../Shared/ComboBox/ComboBox";
import TextField from '@mui/material/TextField';

const HotelDataArea = () => {
    const [city, setCity] = useState(null);
    const [address, setAddress] = useState('');
    const [hotelName, setHotelName] = useState('');

    const onAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const onNameChange = (event) => {
        setHotelName(event.target.value);
    }
    return (
        <>
            <ComboBox className='cbLocates' option={city}
                setOption={(newValue) => setCity(newValue)}
                boxText={(option) => (option.country) + ', ' + option.city}
                getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                labelText='Locates'
            />
            <TextField id="outlined-basic"
                type={'text'}
                defaultValue={address}
                onInput={onAddressChange}
                label="Address"
                variant="outlined"
            />
            <TextField id="outlined-basic"
                type={'text'}
                defaultValue={hotelName}
                onInput={onNameChange}
                label="Hotel Name"
                variant="outlined"
            />
        </>
    )
}

export default HotelDataArea;