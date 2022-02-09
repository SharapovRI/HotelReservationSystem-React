import { useState } from 'react';
import HotelList from '../HotelList/HotelList/HotelList';
import SearchArea from '../SearchArea/SearchArea/SearchArea';
import Button from '@mui/material/Button';
import HotelCreatingPage from '../../HotelCreationPage/HotelCreationPage/HotelCreationPage'
import './AdminPage.scss';

import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const navigate = useNavigate();

    function goToCreatingPage() {
        navigate('/Admin/HotelCreation');
    }

    return (
        <>
            <SearchArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
            <div className='adminPageContainer'>
                <HotelList filter={filter} />
                <Button variant="contained" type="submit" className='addBtn' onClick={goToCreatingPage}>Create hotel</Button>
            </div>
        </>
    )
}

export default AdminPage;