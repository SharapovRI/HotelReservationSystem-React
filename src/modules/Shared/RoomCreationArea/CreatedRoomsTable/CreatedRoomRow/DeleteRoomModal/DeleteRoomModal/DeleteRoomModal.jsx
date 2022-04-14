import './DeleteRoomModal.scss';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { removeCreatedRoom } from '../../../../../../../redux/Reducers/RoomReducer';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DeleteRoomModal = ({open, handleClickClose, index}) => {
    const dispatch = useDispatch();

    function deleteRoom() {
        dispatch(removeCreatedRoom(index));
        handleClickClose();
    }

    return(
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Are you sure you want to delete room?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClickClose}>Disagree</Button>
          <Button onClick={deleteRoom}>Agree</Button>
        </DialogActions>
      </Dialog>
    )
}

export default DeleteRoomModal;