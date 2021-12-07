import { useEffect, useState } from "react";
import ComboBox from "../../Shared/ComboBox/ComboBox";
import TextField from '@mui/material/TextField';
import PhotoList from "../../Shared/PhotoList/PhotoList";
import { styles } from "../../HomePage/styles/styles";

const HotelDataArea = ({ setHotelData }) => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [address, setAddress] = useState('');
    const [hotelName, setHotelName] = useState('');
    const [hotelPhotos, setHotelPhotos] = useState([]);

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
            hotelPhotos: hotelPhotos,
        })
    }, [city, address, hotelName, hotelPhotos])
    return (
        <>
            <div className='textArea' style={styles.AdminHotelCreationTextArea}>
                <div style={styles.SearchAreaElement}>
                    <ComboBox className='cbLocates' option={city}
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
                        defaultValue={address}
                        onInput={onAddressChange}
                        label="Address"
                        variant="outlined"
                    />
                </div>
                <div style={styles.SearchAreaElement}>
                    <TextField id="outlined-basic"
                        type={'text'}
                        defaultValue={hotelName}
                        onInput={onNameChange}
                        label="Hotel Name"
                        variant="outlined"
                    />
                </div>
            </div>
            <div className='photoArea' style={styles.AdminHotelCreationPhotoArea}>
                <PhotoList photos={hotelPhotos} setPhotos={setHotelPhotos} />
            </div>
        </>
    )
}

export default HotelDataArea;