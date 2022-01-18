import './RoomsButtons.scss';

import { useEffect, useState } from "react";
import ModalAddRoom from './ModalAddRoom/ModalAddRoom';

const RoomsButtons = ({ rooms, setRooms, action }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='roomsButtons'>
            <button onClick={handleOpen}>Add</button>
            <ModalAddRoom open={open} handleClose={handleClose} rooms={rooms} setRooms={setRooms} action={action}/>
        </div>
    )
}

export default RoomsButtons;