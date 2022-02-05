import ReservationColumn from '../ReservationColumn/ReservationColumn/ReservationColumn';
import RoomRow from '../RoomRow/RoomRow/RoomRow';
import { Formik, Form, Field } from 'formik';

import './RoomTable.scss'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const RoomTable = ({ rooms, filter }) => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log('slice');
        console.log(roomSt);
    }, [roomSt]);

    function getTableRows() {
        const rowList = [];

        if (rooms?.length > 0) {
            rooms.map((item, index) =>
                rowList.push(
                    <RoomRow room={item} />
                )
            );
        }

        return rowList;
    }

    function goToOrderPage() {
        const payload = filter;
        payload['hotelId'] = params.hotelId;
        payload['rooms'] = roomSt;
        console.log(roomSt);
        console.log(payload);
        const path = axios.getUri({ url: `/OrderPage`, params: payload });
        navigate(path);
    }

    return (
        <Formik
            initialValues={{
                password: '',
                login: '',
            }}
            //validate={checkLoginData}
            onSubmit={goToOrderPage}
        >
            {({ errors }) => (
                <Form id='order_form' className='tableForm'>
                    <table className='roomsTable'>
                        <colgroup className='columns'>
                            <col className='colType' />
                            <col className='colSeats' />
                            <col className='colCost' />
                            <col className='colRoomCount' />
                        </colgroup>
                        <thead className='roomTableHead'>
                            <tr>
                                <th>Type</th>
                                <th>Seats</th>
                                <th>Cost</th>
                                <th>Choose room <br /> count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getTableRows()}
                        </tbody>
                    </table>
                    <div className='reservationColumn'>
                        <ReservationColumn />
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RoomTable;