import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import getRoom from '../../../api/apiRequests/getRoom';
import TextField from '@mui/material/TextField';
import PhotoList from '../../Shared/PhotoList/PhotoList';
import putRoom from '../../../api/apiRequests/putRoom';

const AdminRoomPage = () => {
    const [room, setRoom] = useState();
    const { roomId, hotelId } = useParams();
    const navigate = useNavigate();

    const [typeName, setTypeName] = useState('');
    const [seatsCount, setSeatsCount] = useState(1);
    const [cost, setCost] = useState(1);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function fetchRoom() {
            const data = await getRoom(roomId, hotelId);
            setRoom(data);
            console.log(data);
            setTypeName(data.type);
            setSeatsCount(data.seatsCount);
            setCost(data.cost);
            setPhotos(data.photos);
        }

        fetchRoom();
    }, [roomId, hotelId, setRoom])

    const onNameChange = (event) => {
        setTypeName(event.target.value);
    }

    const onSeatsChange = (event) => {
        setSeatsCount(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    const saveChanges = () => {
        putRoom(roomId, photos);
        navigate(`/Admin/Hotels/${hotelId}`)
    }

    return (
        <div>
            <div>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={typeName}
                    value={typeName}
                    onInput={onNameChange}
                    label="Type name"
                    variant="outlined"
                />
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={seatsCount}
                    value={seatsCount}
                    onInput={onSeatsChange}
                    label="Seats count"
                    variant="outlined"
                    min={1}
                />
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={cost}
                    value={cost}
                    onInput={onCostChange}
                    label="Cost"
                    variant="outlined"
                    min={1}
                />
            </div>
            <div>
                <PhotoList photos={photos} setPhotos={setPhotos} />
            </div>
            <div>
                <button onClick={() => saveChanges()}>Save</button>
            </div>
        </div>
    )
}

export default AdminRoomPage;