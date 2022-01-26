import { useState } from 'react';
import HotelList from '../HotelList/HotelList/HotelList';
import SearchArea from '../SearchArea/SearchArea/SearchArea';
import Button from '@mui/material/Button';
import HotelCreatingPage from '../../HotelCreationPage/HotelCreationPage/HotelCreationPage'
import './AdminPage.scss';

import Modal from '@mui/material/Modal';

const AdminPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className='adminPageContainer'>
            <SearchArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount}/>
            <HotelList hotels={content} />
            <Button variant="contained" type="submit" className='addBtn' onClick={() => handleOpen()}>Create hotel</Button>
            <Modal
                open={open}
                onClose={handleClose}
                className='creatingHotelModal'
                sx={{overflow:'auto'}}
            >
                <HotelCreatingPage />
            </Modal>
        </div>
    )
}

export default AdminPage;