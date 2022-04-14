import './RoomSection.scss';
import CreationPhotoCarousel from '../../../../../../Shared/CreationPhotoCarousel/CreationPhotoCarousel/CreationPhotoCarousel';
import { useEffect, useState } from 'react';
import SelectFacilitiesModal from '../SelectFacilitiesModal/SelectFacilitiesModal/SelectFacilitiesModal';
import { useDispatch } from 'react-redux';
import { updateSelectedRoom, removeSelectedRoom, removeRooms } from '../../../../../../../redux/Reducers/RoomReducer';
import SelectedFacilitiesList from '../SelectedFacilitiesList/SelectedFacilitiesList/SelectedFacilitiesList';
import DeleteDialog from '../DeleteDialog/DeleteDialog/DeleteDialog';
import PhotosCarousel from '../../../../../../HotelPage/HotelContent/PhotosCarousel/PhotosCarousel/PhotosCarousel';

const RoomSection = ({ room }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const [selectedFacilities, setSelectedFacilities] = useState([]);

    const [openDialog, setOpenDialog] = useState(false);
    const handleClickOpen = () => setOpenDialog(true);
    const handleClickClose = () => setOpenDialog(false);
    const [confirmDelete, setConfirmDelete] = useState(false);

    useEffect(() => {
        let selectedRoom = {};
        Object.assign(selectedRoom, room);
        const totalRoomCost = getTotalRoomCost();
        selectedRoom['cost'] = totalRoomCost;
        selectedRoom['facilities'] = selectedFacilities;
        dispatch(updateSelectedRoom(selectedRoom));
    }, [selectedFacilities])

    function getTotalRoomCost()
    {
        let totalRoomCost = room.cost;
        for (let index = 0; index < selectedFacilities.length; index++) {
            totalRoomCost += selectedFacilities[index].cost;            
        }
        return totalRoomCost;
    }

    useEffect(() => {
        if (confirmDelete === true)
        {
            deleteRoom();
        }
    }, [confirmDelete])

    function deleteRoom() {
        let selectedRoom = {};
        Object.assign(selectedRoom, room);
        dispatch(removeSelectedRoom(selectedRoom));
        dispatch(removeRooms(selectedRoom));
    }

    return (
        <div className='room_section'>
            <div className="room_section_header">
                <div className="rs_title">
                    <h3>{room?.type}</h3>
                </div>
                <div className="rs_delete_btn" onClick={handleClickOpen}>
                    <span>Delete</span>
                </div>
            </div>
            <PhotosCarousel photos={room.photos} />
            <div className="seats_count">
                <h3>
                    <strong>Seats amount:</strong> {room?.seatsCount} seats
                </h3>
            </div>
            <SelectedFacilitiesList selectedFacilities={selectedFacilities} />
            <div className="rs_btn" onClick={handleOpen}>
                <h3>Configure amenities</h3>
            </div>
            <SelectFacilitiesModal open={open} handleClose={handleClose} setSelectedFacilities={setSelectedFacilities} />
            <DeleteDialog open={openDialog} handleClose={handleClickClose} setConfirm={setConfirmDelete} />
        </div>
    )
}

export default RoomSection;