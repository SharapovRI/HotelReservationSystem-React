import './HotelList.scss';

import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getHotels from '../../../../api/apiRequests/getHotels';
import Pagination from '@mui/material/Pagination';
import deleteHotel from '../../../../api/apiRequests/deleteHotel';

const HotelList = ({ filter }) => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [hotels, setHotels] = useState([]);
    const [deleted, setDeleted] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(filter);
        async function fetchHotels() {
            const data = await getHotels({ ...filter, index: page - 1 });
            setHotels(data.result);
            setPageCount(data.pageCount);
        }

        { filter && fetchHotels() }
    }, [filter, page, deleted]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    async function removeHotel(hotelId) {
        const result = await deleteHotel(hotelId);
        const newDeleted = deleted + 1;
        setDeleted(newDeleted)
    }

    function getHotelList() {
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
                                    {item.discription}
                                </div>
                                <div className="item_buttons">
                                    <div className="item_button">
                                        <Button variant="contained" onClick={() => navigate(`/Admin/HotelUpdating/${item.id}`)}>Edit</Button>
                                    </div>
                                    <div className="item_button">
                                        <Button variant="contained" onClick={() => removeHotel(item.id)}>Delete</Button>
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
                {hotels?.length > 0 &&
                <>
                {getHotelList()}
                <Pagination count={pageCount} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
                </>
}
            </div>
        </div>
    )
}

export default HotelList;