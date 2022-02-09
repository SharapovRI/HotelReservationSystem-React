import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CreatingRoomModal from '../../../CreatingRoomModal/CreatingRoomModal/CreatingRoomModal';
import DeleteRoomModal from '../DeleteRoomModal/DeleteRoomModal/DeleteRoomModal';
import { useState } from 'react';

import './CreatedRoomRow.scss';

const CreatedRoomRow = ({ room, index }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openAlert, setAlertOpen] = useState(false);
    const handleClickOpen = () => setAlertOpen(true);
    const handleClickClose = () => setAlertOpen(false);

    return (
        <>
            <tr className='table_row'>
                <th>{room?.typeName}</th>
                <th>{room?.seatsCount}</th>
                <th>{room?.cost}$</th>
                <th>{room?.roomCount}</th>
                <th>
                    <div className='UDbtns'>
                        <Button className='updateBtn' variant="standart" endIcon={<CreateIcon />} onClick={handleOpen} />
                        <Button className='deleteBtn' variant="standart" endIcon={<DeleteIcon />} onClick={handleClickOpen}/>
                    </div>
                </th>
            </tr>
            <CreatingRoomModal open={open} handleClose={handleClose} roomItem={room} index={index} />
            <DeleteRoomModal open={openAlert} handleClickClose={handleClickClose} index={index}/>
        </>
    )
}

export default CreatedRoomRow;