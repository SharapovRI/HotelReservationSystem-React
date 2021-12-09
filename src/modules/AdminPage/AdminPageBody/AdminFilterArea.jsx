import { useState } from "react";
import TextField from '@mui/material/TextField';
import getHotels from "../../../api/apiRequests/getHotels";
import ComboBox from "../../Shared/ComboBox/ComboBox";

import './AdminFilterArea.scss';

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
            size: 5
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
        <div className='adminInfoArea'>
            <div className='adminInfoItem'>
                <ComboBox className='cbLocates' option={city}
                    setOption={(newValue) => setCity(newValue)}
                    setCountry={(newValue => setCountry(newValue))}
                    boxText={(option) => (option.country) + ', ' + option.city}
                    getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                    labelText='Locates'
                />
            </div>
            <div className='adminInfoItem'>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={hotelName}
                    onInput={onTextChange}
                    label="Hotel name"
                    variant="outlined"
                />
            </div>
            <div className='adminInfoItem'>
                <button onClick={searchHotels}>Search</button>
            </div>
        </div>
    )
}

export default AdminFilterArea;