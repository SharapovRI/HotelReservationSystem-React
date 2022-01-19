import { useDispatch } from 'react-redux';
import { addRooms, removeRooms, updateRoomState } from '../../../../../redux/Reducers/RoomReducer';
import './RoomRow.scss';

const RoomRow = ({ room }) => {
    const dispatch = useDispatch();

    function saveChoose(event) {
        const payload = {
            id: room?.id,
            count: Number(event.target.value),
        }
        dispatch(updateRoomState(payload));
    }

    function getOptions() {
        const optionList = [];
        const cost = room?.cost;

        if (room?.freeRoomsId?.length > 0) {
            optionList.push(
                <option>{0}</option>
            )

            for (let index = 1; index <= room.freeRoomsId.length; index++) {
                optionList.push(
                    <option>{`${index}`}</option>
                )
            }
        }

        return optionList;
    }

    return (
        <tr>
            <th>{room?.type}</th>
            <th>{room?.seatsCount}</th>
            <th>{room?.cost}</th>
            <th>
                <select onChange={(event) => saveChoose(event)}>
                    {getOptions()}
                </select>
            </th>
        </tr>
    )
}

export default RoomRow;