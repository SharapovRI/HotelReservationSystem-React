import './FacilityCreationArea.scss';

import { useEffect, useState } from 'react';
import CreatingFacilityModal from '../CreatingFacilityModal/CreatingFacilityModal/CreatingFacilityModal';
import CreatingFacilityItem from '../CreatingFacilityItem/CreatingFacilityItem/CreatingFacilityItem';
import { useDispatch, useSelector } from 'react-redux';
import { clearCreatedFacilities } from '../../../../redux/Reducers/FacilitiesReducer';
import Button from '@mui/material/Button';

const FacilityCreationArea = ({setFacilityPayload, facilityPayload}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const facilitiesRedux = useSelector((state) => state.facilityReducer?.createdFacilities)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearCreatedFacilities());
    }, [setOpen, dispatch])

    useEffect(() => {
        const facilities = {
            facilities: facilitiesRedux,
        }
        setFacilityPayload(facilities);
    }, [facilitiesRedux, setFacilityPayload]);

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
            <h3>Facility creation</h3>
            <CreatingFacilityModal open={open} handleClose={handleClose} />
            <div className='createdFacilitiesList'>
                {getFacilities()}
            </div>
            <Button variant="contained" onClick={handleOpen}>Create</Button>
        </div>
    )
}

export default FacilityCreationArea;