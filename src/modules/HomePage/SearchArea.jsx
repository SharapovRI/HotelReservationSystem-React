import React, { useState } from 'react';
import DatePickerRange from './DatePickerRange';
import TextField from '@mui/material/TextField';
import getHotels from '../../api/apiRequests/getHotels';
import './styles/HomePage.css'
import { Link } from 'react-router-dom';
import ComboBox from '../Shared/ComboBox/ComboBox';

const SearchArea = ({setFilter, setContent, setPageCount}) => {
    const [date, setDate] = useState([new Date(), new Date()]);
    const [city, setCity] = useState(null);
    const [country, setCountry] = useState(null);
    const [seatsCount, setSeatsCount] = useState(0);

    async function searchHotels()
    {    
        const payload = {
            cityId:city,
            checkIn: new Date(date[0]).toJSON(),
            checkOut: new Date(date[1]).toJSON(),
            freeSeatsCount:seatsCount,
            size:1
        };
        setFilter(payload);

        const data = await getHotels({...payload, index:0});      
        
        setContent(data.result);
        setPageCount(data.pageCount);
        // setCheckInDate(date[0].toJSON());
        // setCheckOutDate(date[1].toJSON());
    }

    const onSeatsChange = (event) =>{
        setSeatsCount(event.target.value);
    }

    return(
        <div className='searchArea'>
            <ComboBox className='cbLocates' option={city} 
                setOption={(newValue) => setCity(newValue) } 
                setCountry={(newValue => setCountry(newValue))}
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
            <Link to={{ pathname:'/Hotels'}}>
                <button onClick={searchHotels}>Search</button>
            </Link>
        </div>
    )
}

export default SearchArea;