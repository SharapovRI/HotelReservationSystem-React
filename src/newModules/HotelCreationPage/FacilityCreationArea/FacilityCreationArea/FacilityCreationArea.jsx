import { useEffect, useState } from 'react';
import CreatingFacilityModal from '../CreatingFacilityModal/CreatingFacilityModal/CreatingFacilityModal';
import CreatingFacilityItem from '../CreatingFacilityItem/CreatingFacilityItem/CreatingFacilityItem';
import './FacilityCreationArea.scss';
import { useSelector } from 'react-redux';

const FacilityCreationArea = ({setFacilityPayload}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const facilitiesRedux = useSelector((state) => state.facilityReducer?.createdFacilities)

    useEffect(() => {
        const facilities = {
            facilities: facilitiesRedux,
        }
        setFacilityPayload(facilities);
    }, [facilitiesRedux]);

    function getFacilities() {
        const rowList = [];

        if (facilitiesRedux?.length > 0) {
            facilitiesRedux.map((item, index) =>
                rowList.push(
                    <CreatingFacilityItem facilityItem={item} index={index} />
                )
            );
        }

        return rowList;
    }

    return(
        <div className='facilityCreationArea'>
            <h2>Facility area</h2>
            <CreatingFacilityModal open={open} handleClose={handleClose} />
            <div className='createdFacilitiesList'>
                {getFacilities()}
            </div>
            <button onClick={handleOpen}>create</button>
        </div>
    )
}

export default FacilityCreationArea;