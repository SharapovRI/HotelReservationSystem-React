import './SearchedHotels.scss';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchedHotels = ({ hotels, filter }) => {
    const navigate = useNavigate();

    function goToHotel(index) {
        const path = axios.getUri({ url: `/Hotels/${index}`, params: filter });
        navigate(path);
    }

    const listItems = () => {
        const list = [];
        if (hotels.length > 0) {
            hotels.map((item, index) =>
                list.push(
                    <li key={index} className='listItem'>
                        <div className='listItemImage'>
                            <img src={`data:${item.photos[0]?.extension};base64,${item.photos[0]?.data}`} />
                        </div>
                        <div className="listItemDescription">
                            <h2>{item.name}</h2>
                            <h5>{item.city}</h5>
                            <Button variant="contained" type="submit" className='orderButton' onClick={() => goToHotel(item.id)}>Order</Button>
                        </div>
                    </li>
                )
            );
        }

        return list;
    }

    return (
        <>
            {hotels && hotels[0]?.city}
            <ul>{listItems()}</ul>
        </>
    )
}

export default SearchedHotels;