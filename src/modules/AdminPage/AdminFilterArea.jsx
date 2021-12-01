import { useState } from "react";
import getHotels from "../../api/apiRequests/getHotels";
import ComboBox from "../Shared/ComboBox/ComboBox";
import TextField from '@mui/material/TextField';

const AdminFilterArea = ({ setFilter, setContent, setPageCount }) => {
    const [city, setCity] = useState(null);
    const [hotelName, setHotelName] = useState('');

    async function searchHotels()
    {    
        const payload = {
            cityId:city,
            checkIn: null,
            checkOut: null,
            freeSeatsCount:0,
            namePart:hotelName,
            size:1
        };
        setFilter(payload);

        const data = await getHotels({...payload, index:0});      
        
        setContent(data.result);
        setPageCount(data.pageCount);
    }

    const onTextChange = (event) =>{
        setHotelName(event.target.value);
    }


    return (
        <div>
            <ComboBox className='cbLocates' option={city}
                setOption={(newValue) => setCity(newValue)}
                boxText={(option) => (option.country) + ', ' + option.city}
                getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                labelText='Locates'
            />
            <TextField id="outlined-basic" 
                type={'text'} 
                defaultValue={hotelName} 
                onInput={onTextChange} 
                label="Seats Count" 
                variant="outlined" 
            />
                <button onClick={searchHotels}>Search</button>
        </div>
    )
}

export default AdminFilterArea;