import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

import './ModalEditOrder.scss'
import TimePickerIn from '../../OrderPage/TimePickerIn';
import putOrderTime from '../../../api/apiRequests/putOrderTime';

const ModalEditOrder = ({ open, handleClose, action, content }) => {
    const [checkInTime, setCheckInTime] = useState();
    const [checkOutTime, setCheckOutTime] = useState();
    const [cost, setCost] = useState(1);
    const [facilities, setFacilities] = useState([]);
    const [timeIn, setTimeIn] = useState();

    const [error, setError] = useState('');

    useEffect(() => {
        console.log(content);
        setCheckInTime(new Date(content?.checkInTime));
        setCheckOutTime(new Date(content?.checkOutTime));
        setCost(content?.cost);
        setFacilities(content?.additionalFacilities);
    }, [content])

    const update = () => {
        const choosenTime = new Date(timeIn);
        const hours = choosenTime.getHours();
        const min = choosenTime.getMinutes();
        const checkingTime = new Date();
        checkingTime.setHours(hours);
        checkingTime.setMinutes(min);

        const updOrderTime = {
            id: content.id,
            checkInTime: checkingTime,
        }
        putOrderTime(updOrderTime);
        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: 24,
        p: 4,
    };

    const validCheck = (event) => {
        const choosenTime = new Date(timeIn);
        const hours = choosenTime.getHours();
        const min = choosenTime.getMinutes();
        const now = new Date();
        let checkingTime = new Date();
        console.log(hours);
        checkingTime.setHours(hours);
        checkingTime.setMinutes(min);

        console.log(checkingTime);
        if (checkingTime > now){
            setError('Invalid time');
        }
        else {
            update();
        }

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='modalBody'>
                    <div className='a'>
                        <h3>Arrival changing</h3>
                    </div>
                    <div className='a'>
                        <TimePickerIn timeIn={timeIn} setTimeIn={setTimeIn} onChange={validCheck}/>
                        {error}
                    </div>
                    <div className='a'>
                        {error === '' && <button onClick={() => validCheck()}>Save</button>}
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default ModalEditOrder;
