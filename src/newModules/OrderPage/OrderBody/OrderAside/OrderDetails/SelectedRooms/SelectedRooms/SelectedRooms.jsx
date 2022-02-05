import './SelectedRooms.scss';
import { useSelector } from 'react-redux';

const SelectedRooms = () => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);

    function getSelectedRooms() {
        const rowList = [];

        const types = groupBy(roomSt, 'type');
        const roomTypes = Object.entries(types);
        if (roomTypes.length > 0) {
            roomTypes.map((item, index) =>
                rowList.push(
                    <li className='selected__room'> 
                        <h3>{item[1]} x {item[0]}</h3>
                    </li>
                )
            );
        }

        return rowList;
    }

    function groupBy(objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            let key = obj[property]
            if (!acc[key]) {
                acc[key] = 0
            }
            acc[key]++
            return acc
        }, {})
    }

    return (
        <div className="selected_rooms">
            <div className="sr_header">
                <h3>You select:</h3>
            </div>
            <ul className='selected_rooms_list'>
                {getSelectedRooms()}
            </ul>
        </div>
    )
}

export default SelectedRooms;