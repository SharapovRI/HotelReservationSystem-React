import { useEffect, useState } from "react";
import { getCost, getHotelId, getRoomId } from "../../redux/CurrentOrder/OrderActions";
import FacilitiesArea from "./FacilitiesArea";


const OrderPage = () => {
    const [hotelId, setHotelId] = useState();
    const [roomId, setRoomId] = useState();
    const [cost, setCost] = useState(0);

    useEffect(() =>{
        async function getData()
        {
            const hotelData = 1     //  getHotelId();
            const roomData = 2      //getRoomId();
            const costData = 300    //getCost();

            if (hotelData !== null && roomData !== null && costData !== null)
            {
                setHotelId(hotelData);
                setRoomId(roomData);
                setCost(costData);
            }
        }
        getData();
    }, [setHotelId, setRoomId, setCost])

    return(
        <div>
            {hotelId !== undefined && <FacilitiesArea hotelId={hotelId}/>}
        </div>
    )
}

export default OrderPage;