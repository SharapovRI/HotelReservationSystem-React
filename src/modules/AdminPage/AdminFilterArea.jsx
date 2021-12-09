import { useState } from "react";
import getHotels from "../../api/apiRequests/getHotels";
import ComboBox from "../Shared/ComboBox/ComboBox";
import TextField from '@mui/material/TextField';
import { styles } from "../HomePage/styles/styles";

const AdminFilterArea = ({ setFilter, setContent, setPageCount }) => {
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [hotelName, setHotelName] = useState('');

    async function searchHotels() {
        const payload = {
            cityId: city,
            countryId: country,
            checkIn: null,
            checkOut: null,
            freeSeatsCount: 0,
            namePart: hotelName,
            size: 1
        };
        setFilter(payload);

        const data = await getHotels({ ...payload, index: 0 });

        setContent(data.result);
        setPageCount(data.pageCount);
    }

    const onTextChange = (event) => {
        setHotelName(event.target.value);
    }


    return (
        <>
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
                    defaultValue={hotelName}
                    onInput={onTextChange}
                    label="Hotel name"
                    variant="outlined"
                />
            </div>
            <div style={styles.SearchAreaElement}>
                <button onClick={searchHotels}>Search</button>
            </div>
        </>
    )
}

export default AdminFilterArea;