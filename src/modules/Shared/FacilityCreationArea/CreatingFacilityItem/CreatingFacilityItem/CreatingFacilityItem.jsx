import { useState } from 'react';
import CreatingFacilityModal from '../../CreatingFacilityModal/CreatingFacilityModal/CreatingFacilityModal';
import './CreatingFacilityItem.scss';

const CreatingFacilityItem = ({ facilityItem, index }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className='createdFacilityItem' onClick={() => handleOpen()}>
                <span>{facilityItem.name}</span><div>{`${facilityItem.cost}$`}</div>
            </div>
            <CreatingFacilityModal open={open} handleClose={handleClose} facilityItem={facilityItem} index={index} />
        </>
    )
}

export default CreatingFacilityItem;