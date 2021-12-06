import { useEffect, useState } from "react";
import ComboBox from "../../Shared/ComboBox/ComboBox";
import TextField from '@mui/material/TextField';
import PhotoList from "../../Shared/PhotoList/PhotoList";

const HotelDataArea = ({setHotelData}) => {
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

    useEffect(()=>{
        setHotelData({
            cityId:city,
            address:address,
            name:hotelName,
            countryId:country,
            hotelPhotos:hotelPhotos,
        })
    }, [city, address, hotelName, hotelPhotos])
    return (
        <>
        <div>
            <ComboBox className='cbLocates' option={city}
                setOption={(newValue) => setCity(newValue)}
                setCountry={(newValue => setCountry(newValue))}
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
        </div>
        <div>
            <PhotoList photos={hotelPhotos} setPhotos={setHotelPhotos}/>
        </div>
        </>
    )
}

export default HotelDataArea;