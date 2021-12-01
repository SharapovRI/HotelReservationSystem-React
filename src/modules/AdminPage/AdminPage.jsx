import { useState } from "react";
import HotelList from "../HomePage/HotelList";
import AdminFilterArea from "./AdminFilterArea";
import AdminHotelList from "./AdminHotelList";

const AdminPage = () => {
    const [filter, setFilter] = useState(null);
    const [content, setContent] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    return (
        <>
            <AdminFilterArea setFilter={setFilter} setContent={setContent} setPageCount={setPageCount} />
            <AdminHotelList pageCount={pageCount} content={content} filter={filter} setContent={setContent} />
            <button>Add new hotel</button>
        </>
    )
}

export default AdminPage;