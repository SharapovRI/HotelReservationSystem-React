import { useEffect, useState } from "react";

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';

const ActionFacilityButton = ({ facility, actionFacility, buttonName }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        setFacilityName(facility?.name);
        setCost(facility?.cost);
    }, [])

    const [facilityName, setFacilityName] = useState('');
    const [cost, setCost] = useState(1);

    const onNameChange = (event) => {
        setFacilityName(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    const updateItem = () => {
        const newItem = {
            id: facility?.id,
            name: facilityName,
            cost: Number(cost),
        }
        actionFacility(newItem);
        handleClose();
    }

    return (
        <>
            <button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={handleOpen}
            >
                {buttonName}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic"
                        type={'text'}
                        defaultValue={facility?.name}
                        onInput={onNameChange}
                        label="Facility name"
                        variant="outlined"
                    />
                    <TextField id="outlined-basic"
                        type={'number'}
                        defaultValue={facility?.cost}
                        onInput={onCostChange}
                        label="Cost"
                        variant="outlined"
                        min={1}
                    />
                    <button onClick={updateItem}>Save</button>
                </Box>
            </Modal>
        </>
    )
}

export default ActionFacilityButton;