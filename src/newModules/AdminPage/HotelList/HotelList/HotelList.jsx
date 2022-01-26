import './HotelList.scss';

import Button from '@mui/material/Button';

const HotelList = ( { hotels } ) => {
    function getHotels() {
        const list = [];
        if (hotels.length > 0) {
            hotels.map((item, index) =>
                list.push(
                    <div key={index} className='hotelListItem'>
                        <div className='hotelListItemImage'>
                            <img src={`data:${item.photos[0]?.extension};base64,${item.photos[0]?.data}`} />
                        </div>
                        <div className="hotelListItemDescription">
                            <h2>{item.name}</h2>
                            <h5>{item.city}</h5>
                            {/* <Button variant="contained" type="submit" className='orderButton' onClick={() => goToHotel(item.id)}>Order</Button> */}
                        </div>
                    </div>
                )
            );
        }

        return list;
    }

    return(
        <div className='adminHotelContainer'>
            <div className='adminHotelList'>
                {hotels && getHotels()}
            </div>
        </div>
    )
}

export default HotelList;