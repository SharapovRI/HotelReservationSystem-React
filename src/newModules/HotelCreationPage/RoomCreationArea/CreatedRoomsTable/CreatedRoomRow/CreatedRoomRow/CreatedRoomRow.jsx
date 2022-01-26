import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CreatingRoomModal from '../../../CreatingRoomModal/CreatingRoomModal/CreatingRoomModal';
import { useState } from 'react';

import './CreatedRoomRow.scss';

const CreatedRoomRow = ({ room, index }) => {
    const [createdRooms, setCreatedRooms] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <tr>
            <th>{room?.typeName}</th>
            <th>{room?.seatsCount}</th>
            <th>{room?.cost}</th>
            <th>{room?.roomCount}</th>
            <th>
                <div className='UDbtns'>
                    <Button className='updateBtn' variant="outlined" endIcon={<CreateIcon />} onClick={handleOpen}/>
                    <Button className='deleteBtn' variant="outlined" endIcon={<DeleteIcon />}/>
                </div>
            </th>
        </tr>
        <CreatingRoomModal open={open} handleClose={handleClose} rooms={createdRooms} setRooms={setCreatedRooms} roomItem={room} index={index}/>
        </>
    )
}

export default CreatedRoomRow;