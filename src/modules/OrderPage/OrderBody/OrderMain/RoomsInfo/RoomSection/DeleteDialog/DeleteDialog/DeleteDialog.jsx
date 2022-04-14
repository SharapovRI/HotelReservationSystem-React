import './DeleteDialog.scss';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const DeleteDialog = ( {open, handleClose, setConfirm}) => {

    function confirmDelete() {
        setConfirm(true);
        handleClose();
    }
    
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogTitle>{"Do you really want to delete this room?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={confirmDelete}>Yes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteDialog;