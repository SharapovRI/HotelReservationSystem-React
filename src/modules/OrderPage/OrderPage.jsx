import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import getRoom from "../../api/apiRequests/getRoom";
import createOrder from "../../services/Order/createOrder";
import getSavedData from "../../services/Order/getSavedData";
import FacilitiesArea from "./FacilitiesArea";
import OrderTable from "./OrderTable";
import TimePickerIn from "./TimePickerIn";
import Grid from '@mui/material/Grid';

import { styles } from '../HomePage/styles/styles'


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

    const navigate = useNavigate();

    useEffect(() => {
        getSavedData(setUserId, setHotelId, setRoomId, setCost, setCityId, setCheckInDate, setCheckOutDate)
    }, [roomSt])

    useEffect(() => {
        async function fetchRoom() {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
        }
        { !roomSt && roomId && hotelId && fetchRoom() };
        { roomSt && setRoom(roomSt) }
    }, [roomSt, roomId, hotelId])

    const doOrder = () => {
        createOrder(roomId, userId, checkInDate, checkOutDate, cost, facilitiesIds, checkInTime);
        navigate('/AllOrders')
    }

    return (
        <div className='orderPage' style={styles.OrderPage}>
            <div className='orderPageHeader'>
                <h2>Order page</h2>
                {room && <h2>{room.id}</h2>}
            </div>
            <Grid container spacing={2} sx={{ position: 'absolute', height: '90%' }}>
                <Grid item xs={6} sx={{ position: 'absolute', width: '50%', float: 'left', height: '90%' }}>
                    <div className='facilitiesArea' style={styles.FacilitiesArea}>
                        <div className='facilityTable' style={styles.FacilityTable}>
                            {hotelId !== undefined && <FacilitiesArea hotelId={hotelId} />}
                        </div>
                        <div className='timePicker' style={styles.TimePickerDiv}>
                            <TimePickerIn timeIn={checkInTime} setTimeIn={setCheckInTime} />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6} sx={{ position: 'absolute', width: '50%', right: 0, height: '90%' }}>
                    <div className='orderTable' style={styles.OrderTable}>
                        <OrderTable room={room} cost={cost} setCost={setCost} setFacilitiesIds={setFacilitiesIds} />
                        <div className='doOrderButton' style={styles.DoOrderButton}>
                            <button onClick={doOrder}>Create order</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderPage;