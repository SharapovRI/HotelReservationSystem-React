import { useState } from 'react';
import CreatingFacilityModal from '../../CreatingFacilityModal/CreatingFacilityModal/CreatingFacilityModal';
import './CreatingFacilityItem.scss';

const CreatingFacilityItem = ({ facilityItem, index }) => {
    const [createdFacilities, setCreatedFacilities] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='createdFacilityItem' onClick={() => handleOpen()}>
                <p>{facilityItem.name}</p><p>{facilityItem.cost}</p>
            </div>
            <CreatingFacilityModal open={open} handleClose={handleClose} facilities={createdFacilities}
                setFacilities={setCreatedFacilities} facilityItem={facilityItem} index={index} />
        </>
    )
}

export default CreatingFacilityItem;