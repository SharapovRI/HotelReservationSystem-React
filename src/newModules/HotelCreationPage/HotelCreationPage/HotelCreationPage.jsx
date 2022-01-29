import { useState } from 'react';
import FacilityCreationArea from '../../Shared/FacilityCreationArea/FacilityCreationArea/FacilityCreationArea';
import HotelCreationInfo from '../../Shared/HotelCreationInfo/HotelCreationInfo/HotelCreationInfo';
import RoomCreationArea from '../../Shared/RoomCreationArea/RoomCreationArea/RoomCreationArea';
import Button from '@mui/material/Button';
import './HotelCreationPage.scss';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import postHotel from '../../../api/apiRequests/postHotel';

const HotelCreationPage = () => {
    const navigate = useNavigate();
    const [hotelPayload, setHotelPayload] = useState({});
    const [roomPayload, setRoomPayload] = useState({});
    const [facilityPayload, setFacilityPayload] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);
    
    useEffect(() => {
        if(isSubmited){
            const payload = Object.assign(hotelPayload, roomPayload, facilityPayload);
            const resp = postHotel(payload);
            setIsSubmited(false)
            navigate('/Admin');
        }
    }, [isSubmited]);

    function cancel() {
        navigate('/Admin');
    }

    return (
        <div className='hotelCreationContainer'>
            <h2>Hotel creation</h2>

            <HotelCreationInfo setHotelPayload={setHotelPayload} setIsSubmited={setIsSubmited}/>
            <RoomCreationArea setRoomPayload={setRoomPayload}/>
            <FacilityCreationArea setFacilityPayload={setFacilityPayload}/>
            <div className='hotelCreationButtons'>
                <Button variant="contained" className='hotelCreationButton' onClick={cancel}>Cancel</Button>
                <Button form='deForm' variant="contained" type="submit" className='hotelCreationButton'>Create</Button>
            </div>
        </div>
    )
}

export default HotelCreationPage;