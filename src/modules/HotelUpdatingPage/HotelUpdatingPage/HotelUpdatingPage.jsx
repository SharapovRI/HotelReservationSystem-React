import './HotelUpdatingPage.scss';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import postHotel from '../../../api/apiRequests/postHotel';
import { useState } from 'react';
import FacilityCreationArea from '../../Shared/FacilityCreationArea/FacilityCreationArea/FacilityCreationArea';
import HotelCreationInfo from '../../Shared/HotelCreationInfo/HotelCreationInfo/HotelCreationInfo';
import RoomCreationArea from '../../Shared/RoomCreationArea/RoomCreationArea/RoomCreationArea';
import Button from '@mui/material/Button';
import getHotelsRooms from '../../../api/apiRequests/getHotelRooms';
import getHotelFacilities from '../../../api/apiRequests/getHotelFacilities';
import { useDispatch } from 'react-redux';
import { addCreatedRoomsRange } from '../../../redux/Reducers/RoomReducer';
import { addCreatedFacilitiesRange } from '../../../redux/Reducers/FacilitiesReducer';
import putHotel from '../../../api/apiRequests/putHotel';

const HotelUpdatingPage = () => {
    const navigate = useNavigate();
    const [hotelPayload, setHotelPayload] = useState({});
    const [roomPayload, setRoomPayload] = useState({});
    const [facilityPayload, setFacilityPayload] = useState({});
    const [isSubmited, setIsSubmited] = useState(false);
    const dispatch = useDispatch();

    const { hotelId } = useParams();

    useEffect(() => {
        async function getData() {
            const payload = {
                size: -1,
                index: 0,
            };

            const data = await getHotelsRooms(hotelId, { ...payload });

            setHotelPayload(data?.hotel);
            setRoomPayload(data?.result);
            dispatch(addCreatedRoomsRange(convertRooms(data?.result)));
        }
        { hotelId && getData() };
    }, [hotelId]) //hotel and room payload

    useEffect(() => {
        async function fetchFacilities() {
            const data = await getHotelFacilities(hotelId, {
                index: 0,
                size: 200
            });

            setFacilityPayload(data);
            dispatch(addCreatedFacilitiesRange(data))
        }

        { hotelId && fetchFacilities() };
    }, [hotelId]) //facility payload

    useEffect(() => {
        if (isSubmited) {
            const payload = Object.assign(hotelPayload, roomPayload, facilityPayload);
            if (hotelId) {
                const resp = putHotel(hotelId, payload);
                navigate('/Admin');
            }
            setIsSubmited(false)
        }
    }, [isSubmited]);

    function convertRooms(rooms) {
        const roomList = [];

        for (var i = 0; i < rooms?.length; i++) {
            const newRoom = {
                cost: rooms[i].cost,
                roomCount: rooms[i].freeRoomsId.length,
                roomPhotos: rooms[i].photos,
                seatsCount: rooms[i].seatsCount,
                typeName: rooms[i].type,
            }
            roomList.push(newRoom);
        }

        return roomList;
    }

    function cancel() {
        navigate('/Admin');
    }

    return (
        <div className='hotelCreationContainer'>
            <div className="hcc_header">
                <h2>Hotel updating</h2>
            </div>
            <div className="hcc_main">
                <div className="hcc_main_hotel_facilities">
                    <HotelCreationInfo setHotelPayload={setHotelPayload} setIsSubmited={setIsSubmited} hotelPayload={hotelPayload} />
                    <FacilityCreationArea setFacilityPayload={setFacilityPayload} facilityPayload={facilityPayload} />
                </div>
                <div className="hcc_main_rooms">
                    <RoomCreationArea setRoomPayload={setRoomPayload} roomPayload={roomPayload} />
                </div>
            </div>
            <div className='hotelCreationButtons'>
                <Button variant="contained" className='hotelCreationButton' onClick={cancel}>Cancel</Button>
                <Button form='deForm' variant="contained" type="submit" className='hotelCreationButton'>Update</Button>
            </div>
        </div >
    )
}

export default HotelUpdatingPage;