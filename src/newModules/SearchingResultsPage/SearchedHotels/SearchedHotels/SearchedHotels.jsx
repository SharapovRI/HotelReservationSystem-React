import './SearchedHotels.scss';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';
import getHotels from '../../../../api/apiRequests/getHotels';

const SearchedHotels = ({ filter }) => {
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [hotels, setHotels] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    function goToHotel(index) {
        const path = axios.getUri({ url: `/Hotels/${index}`, params: filter });
        navigate(path);
    }

    useEffect(() => {
        async function fetchHotels() {
            const data = await getHotels({ ...filter, index: page - 1 });
            setHotels(data.result);
            setPageCount(data.pageCount);
        }

        { filter && fetchHotels() }
    }, [filter, page])

    const listItems = () => {
        const list = [];
        if (hotels.length > 0) {
            hotels.map((item, index) =>
                list.push(
                    <div key={index} className='hotel_list_item'>
                        <div className='hotel_list_item_image'>
                            <img src={`data:${item.photos[0]?.extension};base64,${item.photos[0]?.data}`} />
                        </div>
                        <div className='hotel_list_item_text'>
                            <div className="hotel_list_item_header">
                                <div className="hotel_name">
                                    <h3>{item.name}</h3>
                                </div>
                                <div className="hotel_address">
                                    {item.city}
                                </div>
                            </div>
                            <div className='hotel_list_item_body'>
                                <div className="item_discription">
                                    {item.discription}
                                </div>
                                <div className="item_buttons">
                                    <div className="item_button">
                                        <Button variant="contained" type="submit" className='orderButton' onClick={() => goToHotel(item.id)}>View the availability of seats</Button>
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
        <>
            <div className="searched_hotels_header">
                <div className="shh_title">
                    <span>{hotels && hotels[0]?.city}</span>
                </div>
            </div>
            {hotels?.length > 0 &&
                <>
                    <div className='searched_hotels_list'>{listItems()}</div>
                    <Pagination count={pageCount} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
                </>
            }
        </>
    )
}

export default SearchedHotels;