import './DeleteFacilityModal.scss';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeCreatedFacility } from '../../../../../../redux/Reducers/FacilitiesReducer';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteFacilityModal = ({ open, handleClickClose, handleClose, index }) => {
    const dispatch = useDispatch();

    function deleteFacility() {
        dispatch(removeCreatedFacility(index));
        handleClickClose();
        handleClose();
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClickClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Are you sure you want to delete facility?"}</DialogTitle>
            <DialogActions>
                <Button onClick={handleClickClose}>Disagree</Button>
                <Button onClick={deleteFacility}>Agree</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteFacilityModal;