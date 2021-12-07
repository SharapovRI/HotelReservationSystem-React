import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "../../HomePage/styles/styles";
import ComboBox from "../../Shared/ComboBox/ComboBox";

const HotelInfoUpdating = ({ setHotelData, hotel }) => {
    const { city: cityName, address: address, name: name } = hotel;
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [newAddress, setAddress] = useState('');
    const [newName, setName] = useState('');

    useEffect(() => {
        setAddress(address);
        setName(name);
    }, [address, name])

    const onAddressChange = (event) => {
        setAddress(event.target.value);
    }
    const onNameChange = (event) => {
        setName(event.target.value);
    }

    useEffect(() => {
        setHotelData({
            cityId: city,
            address: newAddress,
            name: newName,
            countryId: country,
        })
    }, [city, newAddress, newName])

    return (
        <div className='textArea' style={styles.AdminHotelCreationTextArea}>
            <div style={styles.SearchAreaElement}>
                <ComboBox className='cbLocates' filter={cityName}
                    setOption={(newValue) => setCity(newValue)}
                    setCountry={(newValue => setCountry(newValue))}
                    boxText={(option) => (option.country) + ', ' + option.city}
                    getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                    labelText='Locates'
                />
            </div>
            <div style={styles.SearchAreaElement}>
                <TextField id="outlined-basic"
                    type={'text'}
                    value={newAddress}
                    onInput={onAddressChange}
                    label="Address"
                    variant="outlined"
                />
            </div>
            <div style={styles.SearchAreaElement}>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={newName}
                    value={newName}
                    onInput={onNameChange}
                    label="Hotel Name"
                    variant="outlined"
                />
            </div>
        </div>
    )
}

export default HotelInfoUpdating;