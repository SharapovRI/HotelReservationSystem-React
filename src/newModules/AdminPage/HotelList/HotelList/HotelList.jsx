import './HotelList.scss';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const HotelList = ({ hotels }) => {
    const navigate = useNavigate();

    function getHotels() {
        const list = [];
        if (hotels.length > 0) {
            hotels.map((item, index) =>
                list.push(
                    <div key={index} className='hotelListItem'>
                        <div className='hotelListItemImage'>
                            <img src={`data:${item.photos[0]?.extension};base64,${item.photos[0]?.data}`} />
                        </div>
                        <div className='hotelListItemText'>
                            <div className="hotelListItemHeader">
                                <div className="hotel_name">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="hotel_address">
                                    {item.city}
                                </div>
                            </div>
                            <div className='hotelListItemBody'>
                                <div className="item_discription">

                                </div>
                                <div className="item_buttons">
                                    <div className="item_button">
                                        <Button variant="contained" type="submit" onClick={() => navigate(`/Admin/HotelUpdating/${item.id}`)}>Edit</Button>
                                    </div>
                                    <div className="item_button">
                                        <Button variant="contained" type="submit">Delete</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            );
        }

        return list;
    }

    return (
        <div className='adminHotelContainer'>
            <div className='adminHotelList'>
                {hotels && getHotels()}
            </div>
        </div>
    )
}

export default HotelList;