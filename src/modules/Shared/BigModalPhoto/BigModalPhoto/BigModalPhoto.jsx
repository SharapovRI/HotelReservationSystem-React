import './BigModalPhoto.scss';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const BigModalPhoto = ({ photo, open, handleClose, deletePhoto }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div className="big_modal_photo_container">
                <div className="big_modal_photo">
                    <img src={`data:${photo?.extension};base64,${photo?.data}`}
                        alt={photo.title}
                        loading="lazy" />
                </div>
                {deletePhoto && <div className="big_modal_btn">
                    <Button variant="contained" onClick={deletePhoto}>Delete</Button>
                </div>}
            </div>
        </Modal>
    )
}

export default BigModalPhoto;