import { useEffect, useState } from "react";
import { useParams } from "react-router";
import getHotels from "../../../api/apiRequests/getHotels";
import putHotel from "../../../api/apiRequests/putHotel";
import { styles } from "../../HomePage/styles/styles";
import FacilitiesArea from "./FacilitiesArea";
import HotelInfoUpdating from "./HotelInfoUpdation";
import HotelPhotoUpdating from "./HotelPhotoUpdating";

const HotelUpdatingPage = () => {
    const {hotelId} = useParams();
    const [hotel, setHotel] = useState();
    const [hotelData, setHotelData] = useState(null);
    const [hotelPhotos, setHotelPhotos] = useState(null);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        async function getData() {
            const payload = {
                id: hotelId,
                size:-1,
                index:0,
            };

            const data = await getHotels({ ...payload });

            setHotel(data?.result[0]);
        }
        getData();
    }, [hotelId])

    function updateHotel( )
    {
        putHotel(hotelId, hotelData, hotelPhotos, facilities);
    }

    return (
        <div>
            <div className='adminHotelUpdatingHeader' style={styles.AdminPageHeader}>
                <h2>Hotel updating</h2>
            </div>
            <div className='adminHotelUpdatingFilterArea' style={styles.AdminHotelCreationFilterArea}>
                {hotel && <HotelInfoUpdating setHotelData={setHotelData} hotel={hotel}/>}
                {hotel && <HotelPhotoUpdating hotel={hotel} setHotelPhotos={setHotelPhotos}/>}
            </div>
            <div className='hotelUpdatingFacilitiesArea' style={styles.HotelUpdatingFacilitiesArea}>
                {hotel && <FacilitiesArea hotelId={hotelId} facilities={facilities} setFacilities={setFacilities}/>}
            </div>
            <div style={{float:'right'}}>
                <button onClick={updateHotel}>Save</button>
            </div>
        </div>
    )
}

export default HotelUpdatingPage;