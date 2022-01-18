import './FacilitiesButtons.scss';

import { useEffect, useState } from "react";
import ModalAddFacility from './ModalAddFacility/ModalAddFacility';

const FacilitiesButtons = ({ facilities, setFacilities }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const action = (facility) => setFacilities([...facilities, facility]);

    return (
        <div className='facilitiesButtons'>
            <button onClick={handleOpen}>Add</button>
            <ModalAddFacility open={open} handleClose={handleClose} action={action}/>
        </div>
    )
}

export default FacilitiesButtons;