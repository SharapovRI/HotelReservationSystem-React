import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import './ModalUpdateFacility.scss'
import FacilityInfoArea from '../../../../../../../Shared/FacilityModal/FacilityInfoArea/FacilityInfoArea';

const ModalUpdateFacility = ({ item, open, handleClose, action, removeRoomType, index }) => {
    const [typeName, setTypeName] = useState('');
    const [cost, setCost] = useState(1);

    useEffect(() => {
        setTypeName(item.name);
        setCost(item.cost);
    }, [item])

    const addRoom = () => {
        const facility = {
            cost: Number(cost),
            name: typeName,
        }

        action(facility);

        setTypeName('');
        setCost(1);
        handleClose();
    }

    const removeRooms = () => {
        removeRoomType(index);
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modalBodyFacilities'>
                    <FacilityInfoArea facilityName={typeName} setTypeName={setTypeName} cost={cost} setCost={setCost} />
                    <div className='modalUpdateButtons'>
                        <div className='cancelButtonFacilityDiv'>
                            <button onClick={() => handleClose()}>Cancel</button>
                        </div>
                        <div className='deleteButtonFacilityDiv'>
                            <button onClick={() => removeRooms()}>Delete</button>
                        </div>
                        <div className='updateButtonFacilityDiv'>
                            <button onClick={() => addRoom()}>Update</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalUpdateFacility;
