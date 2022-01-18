import { useState } from "react";
import Box from '@mui/material/Box';

import './FacilitiesListItem.scss';
import ModalUpdateFacility from "./ModalUpdateFacility/ModalUpdateFacility";

const FacilitiesListItem = ({ item, index, removeRoomType, facilities, setFacilities }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function updateRoom(index, updatedRoom) {
        const newSource = Array.from(facilities);
        newSource[index] = updatedRoom;
        setFacilities(newSource);
    }

    const action = (item) => {
        updateRoom(index, item);
    }

    return (
        <>
            <li key={index} onClick={handleOpen}>
                <Box sx={
                    {
                        width: 'auto',
                        height: 'auto',
                        border: '1px solid grey',
                        borderRadius: '5px',
                        borderWidth: '5px',
                        padding: '15px',
                        margin: '15px',
                    }}>
                    <div className='facilityItemInfo'>
                        <div className='infoItem'>
                            Name: {item.name}
                        </div>
                        <div className='infoItem'>
                            Cost: {item.cost}
                        </div>
                    </div>
                </Box>
            </li>
            <ModalUpdateFacility item={item} open={open} handleClose={handleClose} facilities={facilities} 
            setFacilities={setFacilities} action={action} removeRoomType={removeRoomType} index={index}/>
        </>
    )
}
export default FacilitiesListItem;