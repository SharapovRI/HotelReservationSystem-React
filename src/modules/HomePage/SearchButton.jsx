import * as React from 'react';
import axios from "axios";

const SearchButton = ( {city, date, timeIn, timeOut} ) => {

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
            index:0,
            size:1
        };

        const response = await axios.get('https://localhost:44382/Hotels', {params: {...payload}}).then(response => response.data).catch(error => console.error());
        console.log(response); 
    }

    return(
        <button onClick={searchHotels}>Search</button>
    )
};

export default SearchButton;

