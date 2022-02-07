import './OrderPage.scss';

import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import OrderBody from '../OrderBody/OrderBody/OrderBody';
import OrderStepper from '../OrderStepper/OrderStepper/OrderStepper';
import getRoomsRange from '../../../api/apiRequests/getRoomsRange'
import { useDispatch } from 'react-redux';
import { clearRooms, addRoomsRange } from '../../../redux/Reducers/RoomReducer';

const OrderPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    useEffect(() => {
        async function getRooms() {            
            dispatch(clearRooms());
            const rooms = searchParams.getAll('rooms[]');
            const hotelId = searchParams.get('hotelId');
            for (var i = 0; i < rooms?.length; i++) {
                rooms[i] = JSON.parse(rooms[i]);
                const payload = {
                    roomsIds: rooms[i].roomsIds,
                }
                const data = await getRoomsRange(payload);
                console.log(data.result);
                dispatch(addRoomsRange(data.result));
            }
        }
            
        getRooms();
    }, [setSearchParams]);

    return (
        <div className='order_page_container'>
            <OrderStepper />
            <OrderBody />
        </div>
    )
}

export default OrderPage;