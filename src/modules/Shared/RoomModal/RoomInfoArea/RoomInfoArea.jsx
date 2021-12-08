import TextField from '@mui/material/TextField';
import './RoomInfoArea.scss'

const RoomInfoArea = ({ typeName, setTypeName, seatsCount, setSeatsCount, cost, setCost, roomCount, setRoomCount }) => {

    const onNameChange = (event) => {
        setTypeName(event.target.value);
    }

    const onSeatsChange = (event) => {
        setSeatsCount(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    const onRoomCountChange = (event) => {
        setRoomCount(event.target.value);
    }

    return (
        <div className='roomInfoArea'>
            <div className='infoItem'>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={typeName}
                    value={typeName}
                    onInput={onNameChange}
                    label="Type name"
                    variant="outlined"
                />
            </div>
            <div className='infoItem'>
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={seatsCount}
                    value={seatsCount}
                    onInput={onSeatsChange}
                    label="Seats count"
                    variant="outlined"
                    min={1}
                />
            </div>
            <div className='infoItem'>
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={cost}
                    value={cost}
                    onInput={onCostChange}
                    label="Cost"
                    variant="outlined"
                    min={1}
                />
            </div>
            <div className='infoItem'>
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={roomCount}
                    value={roomCount}
                    onInput={onRoomCountChange}
                    label="Room count"
                    variant="outlined"
                />
            </div>
        </div>
    )
}

export default RoomInfoArea;