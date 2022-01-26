import { useEffect, useState } from 'react';
import CreatingFacilityModal from '../CreatingFacilityModal/CreatingFacilityModal/CreatingFacilityModal';
import './FacilityCreationArea.scss';

const FacilityCreationArea = ({setFacilityPayload}) => {
    const [createdFacilities, setCreatedFacilities] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const facilities = {
            facilities: createdFacilities,
        }
        setFacilityPayload(facilities);
    }, [createdFacilities]);

    function getFacilities() {
        const rowList = [];

        if (createdFacilities?.length > 0) {
            createdFacilities.map((item, index) =>
                rowList.push(
                    <div className='createdFacilityItem'>
                        <p>{item.name}</p><p>{item.cost}</p>
                    </div>
                )
            );
        }

        return rowList;
    }

    return(
        <div className='facilityCreationArea'>
            <h2>Facility area</h2>
            <button onClick={handleOpen}>create</button>
            <CreatingFacilityModal open={open} handleClose={handleClose} facilities={createdFacilities} setFacilities={setCreatedFacilities} />
            <div className='createdFacilitiesList'>
                {getFacilities()}
            </div>
        </div>
    )
}

export default FacilityCreationArea;