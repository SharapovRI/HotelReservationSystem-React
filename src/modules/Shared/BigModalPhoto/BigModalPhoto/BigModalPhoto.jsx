import './BigModalPhoto.scss';
import Modal from '@mui/material/Modal';

const BigModalPhoto = ({ photo, open, handleClose }) => {
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
            </div>
        </Modal>
    )
}

export default BigModalPhoto;