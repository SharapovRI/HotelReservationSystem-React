import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useState } from 'react';

import './ModalAddFacility.scss'
import FacilityInfoArea from '../../../../../Shared/FacilityModal/FacilityInfoArea/FacilityInfoArea';

const ModalAddFacility = ({ open, handleClose, action }) => {
    const [typeName, setTypeName] = useState('');
    const [cost, setCost] = useState(1);

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

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '20%',
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
                <div className='modalBodyFacility'>
                    <FacilityInfoArea facilityName={typeName} setTypeName={setTypeName} cost={cost} setCost={setCost}/>
                    <div className='modelAddButtons'>
                        <div className='cancelButtonDiv'>
                            <button onClick={() => handleClose()}>Cancel</button>
                        </div>
                        <div className='addButtonDiv'>
                            <button onClick={() => addRoom()}>Add</button>
                        </div>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalAddFacility;
