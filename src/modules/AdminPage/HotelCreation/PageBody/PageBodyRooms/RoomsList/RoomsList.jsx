import RoomListItem from './RoomListItem/RoomListItem';
import './RoomsList.scss';

const RoomsList = ({ roomsList, setRoomsList }) => {
    const listItems = () => {
        const list = [];
        if (roomsList.length > 0) {
            roomsList.map((item, index) =>
                list.push(
                    <RoomListItem item={item} index={index} removeRoomType={removeRoomType} rooms={roomsList} setRooms={setRoomsList}/>
                )
            );
        }

        return list;
    }

    function removeRoomType(index) {
        const newSource = Array.from(roomsList);
        newSource.splice(index, 1);
        setRoomsList(newSource);
    }

    return (
        <div>
            <ul className="rooms">{listItems()}</ul>
        </div>
    )
}

export default RoomsList;