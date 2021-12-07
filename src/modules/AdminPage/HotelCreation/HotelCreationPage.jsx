import { useState } from "react";
import postHotel from "../../../api/apiRequests/postHotel";
import { styles } from "../../HomePage/styles/styles";
import FacilitiesDataArea from "./FacilitiesDataArea/FacilitiesDataArea";
import HotelDataArea from "./HotelDataArea";
import RoomDataArea from "./RoomDataArea/RoomDataArea";

const HotelCreationPage = () => {
    const [hotelData, setHotelData] = useState(null);
    const [createdRooms, setCreatedRooms] = useState([]);
    const [facilities, setFacilities] = useState([]);

    function createHotel() {
        postHotel(hotelData, createdRooms, facilities);
    }

    return (
        <>
            <div className='adminHotelCreationHeader' style={styles.AdminPageHeader}>
                <h2>Hotel creation</h2>
            </div>
            <div className='adminHotelCreationFilterArea' style={styles.AdminHotelCreationFilterArea}>
                <HotelDataArea setHotelData={setHotelData} />
            </div>
            <div className='hotelCreationRoomArea' style={styles.HotelCreationRoomArea}>
                <RoomDataArea createdRooms={createdRooms} setCreatedRooms={setCreatedRooms} />
            </div>
            <div className='hotelCreationFacilitiesArea' style={styles.HotelCreationFacilitiesArea}>
                <FacilitiesDataArea facilities={facilities} setFacilities={setFacilities} />
            </div>
            <div className='hotelCreationButton' style={styles.HotelCreationButton}>
            <button onClick={createHotel}>Create hotel</button>
            </div>
        </>
    )
}

export default HotelCreationPage;