import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getRoom from "../../api/apiRequests/getRoom";
import createOrder from "../../services/Order/createOrder";
import getFilterStorage from "../../services/Order/getFilterStorage";
import getOrderDataStorage from "../../services/Order/getOrderDataStorage";
import getSavedData from "../../services/Order/getSavedData";
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

    const [checkInTime, setCheckInTime] = useState(new Date(0, 0, 0, 12));

    const [facilitiesIds, setFacilitiesIds] = useState([]);

    useEffect(() => {
        getSavedData(setUserId, setHotelId, setRoomId, setCost, setCityId, setCheckInDate, setCheckOutDate)
    }, [roomSt])

    useEffect(() => {
        async function fetchRoom() {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
        }
        { !roomSt && roomId && hotelId && fetchRoom() };
        { roomSt && setRoom(roomSt)}
    }, [roomSt, roomId, hotelId])

    const style = {
        float: 'right',
    }

    const left = {
        float: 'left',
    }

    const doOrder = () => {
        createOrder(roomId, userId, checkInDate, checkOutDate, cost, facilitiesIds, checkInTime)
    }

    return (
        <div>
            <h2>Order page</h2>
            {room && <h2>{room.id}</h2>}
            <div style={left}>
                <OrderTable room={room} cost={cost} setCost={setCost} setFacilitiesIds={setFacilitiesIds} />
                <button onClick={doOrder}>Create order</button>
            </div>
            <div style={style}>
                {hotelId !== undefined && <FacilitiesArea hotelId={hotelId} />}
                <TimePickerIn timeIn={checkInTime} setTimeIn={setCheckInTime} />
            </div>
        </div>
    )
}

export default OrderPage;