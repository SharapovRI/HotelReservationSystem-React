import './RoomListItem.scss';

import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useEffect } from 'react';
import getFacilitiesRange from '../../../../../../../../api/apiRequests/getFacilitiesRange';

const RoomListItem = ({ room }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [facilities, setFacilities] = useState([]);
    let photoColumns = 2;

    useEffect(() => {
        if (room?.photos?.length < 2) {
            photoColumns = 1;
        }
        else if (room?.photos?.length < 7) {
            photoColumns = 2;
        }
        else if (room?.photos?.length < 12) {
            photoColumns = 3;
        }
        else {
            photoColumns = 4;
        }
    }, [room?.photos])

    useEffect(() => {
        async function fetchFacilities() {
            const payload = {
                facilitiesIds: room?.additionalFacilities,
            }

            const data = await getFacilitiesRange(payload);
            setFacilities(data);
        }
        fetchFacilities();
    }, [setFacilities])

    function getFacilities() {
        let facilityList = [];
        if (facilities.length > 0) {
            facilities?.map((facility) =>
                facilityList.push(
                    <div className="facility_item_text">
                        <span>{facility.name}</span>
                        <h3>{facility.cost}$</h3>
                    </div>
                )
            )
            console.log(facilityList);
        }
        else {
            facilityList.push(
                <div className="facility_item_text">
                    <span>No facilities</span>
                </div>
            )
        }
        return facilityList;
    }

    return (
        <>
            <div className="oli_room_list_item" onClick={handleOpen}>
                <span>{room.type}</span>
                <p>{room.cost}$</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className='oli_room_modal'>
                    <div className="oli_rm_header">
                        <div className="oli_rm_room_name">
                            <span>{room?.type}</span>
                        </div>
                        <div className="oli_rm_close_button" onClick={handleClose}>
                            <h3>Close</h3>
                        </div>
                    </div>
                    <hr />
                    <div className="oli_rm_body">
                        <div className="oli_rm_photos">
                            <ImageList variant="masonry" cols={photoColumns}>
                                {room.photos.map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            src={`data:${item?.extension};base64,${item?.data}`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                        <div className="oli_rm_facilities">
                            {getFacilities()}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default RoomListItem;