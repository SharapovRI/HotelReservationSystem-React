import React, { useState } from 'react';
import ComboBox from './ComboBox';
import DatePickerRange from './DatePickerRange';
import SearchButton from './SearchButton';
import TimePickerIn from './TimePickerIn';
import TimePickerOut from './TimePickerOut';
import axios from "axios";
import getHotels from '../../api/apiRequests/getHotels';
import './styles/HomePage.css'

const SearchArea = ({setFilter, setContent, setPageCount}) => {
    const [timeIn, setTimeIn] = useState(new Date(0, 0, 0, 12));
    const [timeOut, setTimeOut] = useState(new Date(0, 0, 0, 12));
    const [date, setDate] = useState([new Date(), new Date()]);
    const [city, setCity] = useState(null);

    async function searchHotels()
    {      
        const hours1 = timeIn.getHours();
        const min1 = timeIn.getMinutes();
        date[0].setHours(hours1);
        date[0].setMinutes(min1);

        const hours2 = timeOut.getHours();
        const min2 = timeOut.getMinutes();
        date[1].setHours(hours2);
        date[1].setMinutes(min2);

        const payload = {
            id:city,
            checkIn: new Date(date[0]).toJSON(),
            checkOut: new Date(date[1]).toJSON(),
            freeSeatsCount:0,
            size:1
        };

        setFilter(payload);

        const data = await getHotels({...payload, index:0});
        console.log(data);
        setContent(data.result);
        setPageCount(data.pageCount);
    }

    return(
        <div className='searchArea'>
            <ComboBox className='cbLocates' city={city} setCity={(newValue) => setCity(newValue)}/>
            <DatePickerRange date={date} setDate={(newValue) => setDate(newValue)}/>
            <TimePickerIn timeIn={timeIn} setTimeIn={(newValue) => setTimeIn(newValue)}/>
            <TimePickerOut timeOut={timeOut} setTimeOut={(newValue) => setTimeOut(newValue)}/>
            <button onClick={searchHotels}>Search</button>
        </div>
    )
}

export default SearchArea;