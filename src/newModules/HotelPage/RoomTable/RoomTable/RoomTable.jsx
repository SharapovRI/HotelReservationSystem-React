import ReservationColumn from '../ReservationColumn/ReservationColumn/ReservationColumn';
import RoomRow from '../RoomRow/RoomRow/RoomRow';
import { Formik, Form, Field } from 'formik';

import './RoomTable.scss'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const RoomTable = ({ rooms }) => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);

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

    return (
        <Formik
            //validate={checkLoginData}
            //onSubmit={authorizeClick}
        >
            {({ errors }) => (
                <Form className='tableForm'>
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