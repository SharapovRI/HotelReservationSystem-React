import { useEffect } from 'react';
import { useState } from 'react';
import getRoomsRange from '../../../../../../../api/apiRequests/getRoomsRange';
import RoomListItem from '../RoomListItem/RoomListItem/RoomListItem';
import './OrderRoomList.scss';

const OrderRoomList = ({ orders, setHotelId }) => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function fetchRooms() {
            const roomsIds = orders.map(order => Number(order.roomId));
            const payload = {
                roomsIds: roomsIds,
            }
            const data = await getRoomsRange(payload);
            
            data?.result?.map((room) => room['additionalFacilities'] = (orders.find(order => order.roomId == room.id)).additionalFacilities);
            setRooms(data?.result);
            setHotelId(data?.hotelId);
        }

        {orders && fetchRooms()}
    }, [orders])

    function getRoomList() {
        const roomList = [];

        if (rooms?.length > 0) {
            rooms.map((item, index) =>
                roomList.push(
                    <RoomListItem room={item} />
                )
            );
        }

        return roomList;
    }

    return (
        <div className="oli_rooms_list oli_info_item">
            {getRoomList()}
        </div>
    )
}

export default OrderRoomList;