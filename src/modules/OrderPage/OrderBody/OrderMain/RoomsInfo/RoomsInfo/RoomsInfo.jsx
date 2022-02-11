import './RoomsInfo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import RoomSection from '../RoomSection/RoomSection/RoomSection';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import getHotelFacilities from '../../../../../../api/apiRequests/getHotelFacilities'
import { addFacilities } from '../../../../../../redux/Reducers/FacilitiesReducer';
import TimeSection from '../TimeSection/TimeSection/TimeSection';
import { getId } from '../../../../../../services/TokenService/getId';
import createOrder from '../../../../../../services/Order/createOrder';
import postOrder from '../../../../../../api/apiRequests/postOrder';
import checkOrderCreationData from '../../../../../../services/Validation/orderCreationDataValidation';

const RoomsInfo = () => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);
    const orderingRooms = useSelector((state) => state.roomReducer?.selectedRooms);
    const [searchParams, setSearchParams] = useSearchParams();
    const [timeIn, setTimeIn] = useState(new Date(0, 0, 0, 14));
    const [totalCost, setTotalCost] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [renderEnd, setRenderEnd] = useState(false);

    useEffect(() => {
        async function getFacilities() {
            const hotelId = searchParams.get('hotelId');
            const data = await getHotelFacilities(hotelId, {});
            dispatch(addFacilities(data));
        }
        getFacilities();
    }, [setSearchParams])

    useEffect(() => {
        if (renderEnd && orderingRooms.length < 1) {
            navigate('/')
        }
        setRenderEnd(true);
    }, [orderingRooms])

    function getRoomsList() {
        const roomList = [];
        if (roomSt.length > 0) {
            roomSt.map((item, index) =>
                roomList.push(
                    <RoomSection room={item} />
                )
            );
        }

        return roomList;
    }

    function getTotalCost() {
        let totalCost = 0;
        const days = getNumberOfDays();

        for (let index = 0; index < orderingRooms.length; index++) {
            const room = orderingRooms[index];
            let roomCost = room.cost;
            roomCost *= days;
            totalCost += roomCost;
        }

        setTotalCost(totalCost);
        return totalCost;
    }

    function getNumberOfDays() {
        const date1 = new Date(searchParams.get('checkIn'));
        const date2 = new Date(searchParams.get('checkOut'));
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
    }

    async function submitOrder() {
        const datein = searchParams.get('checkIn');
        const dateout = searchParams.get('checkOut');
        const userId = getId(localStorage.getItem("jwtToken"));
        let orders = [];

        //добавить возможность выбирать несколько одинаковых фасилитей

        for (let index = 0; index < orderingRooms.length; index++) {
            const result = createOrder(orderingRooms[index], datein, dateout, timeIn);
            orders.push(result);
        }

        const payload = {
            personId: Number(1),
            orders: orders,
            totalCost: totalCost,
        }

        const response = await postOrder(payload);
        navigate("/MyOrders");
    }

    function validateOrderParameters() {
        const values = {
            rooms: orderingRooms,
        }
        const errors = checkOrderCreationData(values);
        return errors;
    }

    return (
        <Formik
            initialValues={{
                password: '',
                login: '',
            }}
            validate={validateOrderParameters}
            onSubmit={submitOrder}
        >
            {({ errors }) => (
                <Form className='order_form'>
                    {getRoomsList()}
                    <TimeSection timeIn={timeIn} setTimeIn={setTimeIn} />
                    <div className="submit_container">
                        <h3>Total cost: {getTotalCost()}$</h3>
                        <button type='submit' className='submit_order_btn'>Create order</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RoomsInfo;