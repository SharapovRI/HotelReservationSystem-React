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

const RoomsInfo = () => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);
    const orderingRooms = useSelector((state) => state.roomReducer?.selectedRooms);
    const [searchParams, setSearchParams] = useSearchParams();
    const [timeIn, setTimeIn] = useState(new Date(0, 0, 0, 14));
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        async function getFacilities() {
            const hotelId = searchParams.get('hotelId');
            const data = await getHotelFacilities(hotelId, {});
            console.log(data);
            dispatch(addFacilities(data));
        }
        getFacilities();
    }, [setSearchParams])

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
        }

        const response = await postOrder(payload);
        //navigate("/");
    }

    return(
        <Formik
                initialValues={{
                    password: '',
                    login: '',
                }}
                //validate={checkLoginData}
                onSubmit={submitOrder}
            >
                {({ errors }) => (
                    <Form className='order_form'>
                        {getRoomsList()}
                        <TimeSection timeIn={timeIn} setTimeIn={setTimeIn}/>
                        <div className="submit_container">
                            <button type='submit' className='submit_order_btn'>Create order</button>
                        </div>
                        <button onClick={console.log(orderingRooms)}>sdsds</button>
                    </Form>
                )}
            </Formik>   
    )
}

export default RoomsInfo;