import { useState } from "react";
import { useNavigate } from "react-router";
import AdminFilterArea from "./AdminPageBody/AdminFilterArea";
import AdminHotelList from "./AdminPageBody/AdminHotelList";
import './AdminPage.scss';

const AdminPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <div className='adminPageHeader'>
                <h2>Admin</h2>
            </div>
            <div className='adminPageBody'>
                <div className='adminFilterArea'>
                    <AdminFilterArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
                    <div className='addHotelButton'>
                        <button onClick={() => navigate('/HotelCreation')}>Add new hotel</button>
                    </div>
                </div>
                <div className='adminContentArea'>
                    <AdminHotelList pageCount={pageCount} content={content} filter={filter} setContent={setContent} />
                </div>
            </div>
        </>
    )
}

export default AdminPage;