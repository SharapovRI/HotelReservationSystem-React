import './RoomTable.scss'
import ReservationColumn from '../ReservationColumn/ReservationColumn/ReservationColumn';
import RoomRow from '../RoomRow/RoomRow/RoomRow';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { clearRooms } from '../../../../redux/Reducers/RoomReducer';
import checkRoomOrderingData from '../../../../services/Validation/roomOrderingDataValidation';

const RoomTable = ({ rooms, filter }) => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    useEffect(() => {
        dispatch(clearRooms());
    }, [filter])

    function goToOrderPage() {
        const payload = filter;
        payload['hotelId'] = params.hotelId;
        payload['rooms'] = roomSt;
        const path = axios.getUri({ url: `/OrderPage`, params: payload });
        navigate(path);
    }

    function getStyles(errors) {
        if (errors) {
            return {
                backgroundColor: '#ffebeb',
            }
        }
    }

    function validateRoomOrderingParameters() {
        const values = {
            rooms: roomSt,
        }
        const errors = checkRoomOrderingData(values);
        return errors;
    }

    return (
        <Formik
            initialValues={{
                password: '',
                login: '',
            }}
            validate={validateRoomOrderingParameters}
            onSubmit={goToOrderPage}
        >
            {({ errors }) => (
                <Form id='order_form' className='tableForm'>
                    <table className='roomsTable'>
                        <colgroup className='columns'>
                            <col className='colType' />
                            <col className='colSeats' />
                            <col className='colCost' />
                            <col className='colRoomCount' style={getStyles(errors.rooms)}/>
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
                        <ReservationColumn errors={errors}/>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default RoomTable;