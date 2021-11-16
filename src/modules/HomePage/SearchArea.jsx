import React, { useState } from 'react';
import ComboBox from './ComboBox';
import DatePickerRange from './DatePickerRange';
import TextField from '@mui/material/TextField';
import getHotels from '../../api/apiRequests/getHotels';
import './styles/HomePage.css'
import { Link } from 'react-router-dom';

const SearchArea = ({setFilter, setContent, setPageCount}) => {
    const [date, setDate] = useState([new Date(), new Date()]);
    const [city, setCity] = useState(null);
    const [seatsCount, setSeatsCount] = useState(0);

    async function searchHotels()
    {    
        const payload = {
            id:city,
            checkIn: new Date(date[0]).toJSON(),
            checkOut: new Date(date[1]).toJSON(),
            freeSeatsCount:seatsCount,
            size:1
        };

        setFilter(payload);

        const data = await getHotels({...payload, index:0});        
        setContent(data.result);
        setPageCount(data.pageCount);
    }

    const onSeatsChange = (event, value) =>{
        setSeatsCount(event.target.value);
    }

    return(
        <div className='searchArea'>
            <ComboBox className='cbLocates' option={city} 
                setOption={(newValue) => setCity(newValue) } 
                boxText={(option) => (option.country) + ', ' + option.city}
                getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
                labelText='Locates'
            />
            <DatePickerRange date={date} setDate={(newValue) => setDate(newValue)}/>
            <TextField id="outlined-basic" 
                type={'number'} 
                defaultValue={seatsCount} 
                onInput={onSeatsChange} 
                label="Seats Count" 
                variant="outlined" 
            />            
            <Link to={'/Hotels'}>
                <button onClick={searchHotels}>Search</button>
            </Link>
        </div>
    )
}

export default SearchArea;