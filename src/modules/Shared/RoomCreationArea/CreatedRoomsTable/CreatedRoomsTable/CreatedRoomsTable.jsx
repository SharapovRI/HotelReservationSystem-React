import CreatedRoomRow from '../CreatedRoomRow/CreatedRoomRow/CreatedRoomRow';
import './CreatedRoomsTable.scss';

const CreatedRoomsTable = ({ createdRooms }) => {
    function getTableRows() {
        const rowList = [];

        if (createdRooms?.length > 0) {
            createdRooms.map((item, index) =>
                rowList.push(
                    <CreatedRoomRow room={item} index={index}/>
                )
            );
        }

        return rowList;
    }

    return (
        <>
            <table className='createdRoomsTable'>
                <colgroup className='columns'>
                    <col className='colType' />
                    <col className='colSeats' />
                    <col className='colCost' />
                    <col className='colRoomCount' />
                    <col className='colButtons' />
                </colgroup>
                <thead className='createdRoomsHead'>
                    <tr>
                        <th>Type</th>
                        <th>Seats</th>
                        <th>Cost</th>
                        <th>Rooms count</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {getTableRows()}
                </tbody>
            </table>
        </>
    )
}

export default CreatedRoomsTable;