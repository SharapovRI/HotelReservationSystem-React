import { useEffect, useState } from "react";
import { getCost, getHotelId, getRoomId } from "../../redux/CurrentOrder/OrderActions";
import FacilitiesArea from "./FacilitiesArea";


const OrderPage = () => {
    const [hotelId, setHotelId] = useState();
    const [roomId, setRoomId] = useState();
    const [cost, setCost] = useState(0);

    useEffect(() =>{
        async function GetData()
        {
            const hotelData = getHotelId();
            const roomData = getRoomId();
            const costData = getCost();

            if (hotelData !== null && roomData !== null && costData !== null)
            {
                setHotelId(hotelData);
                setRoomId(roomData);
                setCost(costData);
            }
        }
        GetData();
    }, [])

    return(
        <div>
            {hotelId !== undefined && <FacilitiesArea hotelId={hotelId}/>}
        </div>
    )
}

export default OrderPage;