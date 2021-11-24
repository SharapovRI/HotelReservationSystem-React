import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRoom from "../../api/apiRequests/getRoom";
import getFilterStorage from "../../services/Order/getFilterStorage";
import getOrderDataStorage from "../../services/Order/getOrderDataStorage";
import { getId } from "../../services/TokenService/getId";
import FacilitiesArea from "./FacilitiesArea";
import OrderTable from "./OrderTable";
import TimePickerIn from "./TimePickerIn";


const OrderPage = () => {
    const roomSt = useSelector((state) => state.orderReducer?.room)

    const [userId, setUserId] = useState(-1);
    const [room, setRoom] = useState(null);

    const [hotelId, setHotelId] = useState();
    const [roomId, setRoomId] = useState();
    const [cost, setCost] = useState(0);

    const [cityId, setCityId] = useState(-1);
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();

    const[checkInTime, setCheckInTime] = useState(new Date(0, 0, 0, 12));

    useEffect(() =>{
        async function getData()
        {
            const data = getOrderDataStorage();
            const filter = getFilterStorage();

            const hotelData = data.hotelId 
            const roomData = data.roomId 
            const costData = data.cost 

            const id = getId(localStorage.getItem("jwtToken")); 

            if (hotelData && roomData && costData && id)
            {
                setHotelId(hotelData);
                setRoomId(roomData);
                setCost(costData);
                setUserId(id);
            }
        }
        getData();
    }, [setHotelId, setRoomId, setCost])

    useEffect(() => {
        async function fetchRoom()
        {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
        }
        {!roomSt && roomId && hotelId && fetchRoom()};
    }, [roomSt, roomId, hotelId])

    return (
        <div>
            <h2>Order page</h2>
            {room && <h2>{room.id}</h2>}
            <div>
                <OrderTable />
            </div>
            <div>
                {hotelId !== undefined && <FacilitiesArea hotelId={hotelId} />}
                <TimePickerIn timeIn={checkInTime} setTimeIn={setCheckInTime} />
            </div>
        </div>
    )
}

export default OrderPage;