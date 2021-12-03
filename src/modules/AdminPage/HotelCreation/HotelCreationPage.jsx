import { useState } from "react";
import postHotel from "../../../api/apiRequests/postHotel";
import FacilitiesDataArea from "./FacilitiesDataArea/FacilitiesDataArea";
import HotelDataArea from "./HotelDataArea";
import RoomDataArea from "./RoomDataArea/RoomDataArea";

const HotelCreationPage = () => {
    const [hotelData, setHotelData] = useState(null);
    const [createdRooms, setCreatedRooms] = useState([]);
    const [facilities, setFacilities] = useState([]);

    function createHotel( )
    {
        postHotel(hotelData, createdRooms, facilities);
    }

    return (
        <>
            <div>
                <HotelDataArea setHotelData={setHotelData} />
            </div>
            <br />
            <RoomDataArea createdRooms={createdRooms} setCreatedRooms={setCreatedRooms} />
            <br />
            <FacilitiesDataArea facilities={facilities} setFacilities={setFacilities} />
            <br />
            <button onClick={createHotel}>Create hotel</button>
        </>
    )
}

export default HotelCreationPage;