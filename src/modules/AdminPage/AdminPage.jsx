import { useState } from "react";
import { useNavigate } from "react-router";
import HotelList from "../HomePage/HotelList";
import { styles } from "../HomePage/styles/styles";
import AdminFilterArea from "./AdminFilterArea";
import AdminHotelList from "./AdminHotelList";

const AdminPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <div className='adminPageHeader' style={styles.AdminPageHeader}>
                <h2>Admin</h2>
            </div>
            <div className='adminFilterArea' style={styles.AdminFilterArea}>
                <AdminFilterArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
            </div>
            <div>
                <AdminHotelList pageCount={pageCount} content={content} filter={filter} setContent={setContent} />
            </div>
            <div className='addHotelButton' style={styles.AddHotelButton}>
                <button onClick={() => navigate('/HotelCreation')}>Add new hotel</button>
            </div>
        </>
    )
}

export default AdminPage;