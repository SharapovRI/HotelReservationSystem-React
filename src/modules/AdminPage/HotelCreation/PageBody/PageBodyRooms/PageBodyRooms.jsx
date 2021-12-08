import './PageBodyRooms.scss';
import Box from '@mui/material/Box';
import RoomsList from './RoomsList/RoomsList';
import RoomsButtons from './RoomsButtons/RoomsButtons'

const PageBodyRooms = ({ step, setStep, rooms, setRooms }) => {
    const addRoomAction = (room) => setRooms([...rooms, room]);

    return (
        <Box className='header' sx={
            {
                width: 'auto',
                height: '90%',
                border: '1px solid grey',
                borderRadius: '20px',
                borderWidth: '5px',
                padding: '15px',
                margin: '15px',
            }}>
            <div className='pageBody'>
                <RoomsButtons rooms={rooms} setRooms={setRooms} action={addRoomAction}/>
                <RoomsList roomsList={rooms} setRoomsList={setRooms}/>
                <div className='hotelCreationButtons'>
                    <div className='cancelButtonDiv'>
                        <button onClick={() => setStep(step - 1)}>Cancel</button>
                    </div>
                    <div className='nextButtonDiv'>
                        <button onClick={() => setStep(step + 1)}>Next step</button>
                    </div>
                </div>
            </div>
        </Box >
    )
}

export default PageBodyRooms;