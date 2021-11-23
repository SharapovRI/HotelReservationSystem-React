import { useEffect, useState } from "react";
import getFilterStorage from "../../services/Order/getFilterStorage";
import getOrderDataStorage from "../../services/Order/getOrderDataStorage";
import FacilitiesArea from "./FacilitiesArea";


const OrderPage = () => {
    const [hotelId, setHotelId] = useState();
    const [roomId, setRoomId] = useState();
    const [cost, setCost] = useState(0);

    useEffect(() =>{
        async function getData()
        {
            const data = getOrderDataStorage();
            const filter = getFilterStorage();

            const hotelData = data.hotelId // getHotelId();
            const roomData = data.roomId // getRoomId();
            const costData = data.cost // getCost();

            if (hotelData !== null && roomData !== null && costData !== null)
            {
                setHotelId(hotelData);
                setRoomId(roomData);
                setCost(costData);
            }
        }
        getData();
    }, [setHotelId, setRoomId, setCost])

    return (
        <div>
            <div>
                <h2>{cost}</h2>
            </div>
            <div>
                {hotelId !== undefined && <FacilitiesArea hotelId={hotelId} />}
            </div>
        </div>
    )
}

export default OrderPage;