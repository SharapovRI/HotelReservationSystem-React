import './CreatingRoomModal.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import CreationPhotoCarousel from '../../../../Shared/CreationPhotoCarousel/CreationPhotoCarousel/CreationPhotoCarousel';
import { Formik, Form, Field } from 'formik';

const CreatingRoomModal = ({ open, handleClose, rooms, setRooms, roomItem, index }) => {
    const [roomPhotos, setRoomPhotos] = useState([]);
    const [seatsCount, setSeatsCount] = useState(0);
    const [typeName, setTypeName] = useState('');
    const [cost, setCost] = useState(0);
    const [roomCount, setRoomCount] = useState(0);

    useEffect(() => {
        if (roomItem)
        {
            setRoomPhotos(roomItem.roomPhotos);
            setSeatsCount(roomItem.seatsCount);
            setTypeName(roomItem.typeName);
            setCost(roomItem.cost);
            setRoomCount(roomItem.roomCount);
        }
    }, []);

    const onSeatsChange = (event) => {
        setSeatsCount(event.target.value);
    }

    const onTextChange = (event) => {
        setTypeName(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    const onRoomCountChange = (event) => {
        setRoomCount(event.target.value);
    }

    function createRoom() {
        const room = {
            cost: Number(cost),
            seatsCount: Number(seatsCount),
            typeName: typeName,
            roomPhotos: roomPhotos,
            roomCount: Number(roomCount),
        }

        setRooms([...rooms, room]);
        cancel();
    }

    function updateRoom() {
        const room = {
            cost: Number(cost),
            seatsCount: Number(seatsCount),
            typeName: typeName,
            roomPhotos: roomPhotos,
            roomCount: Number(roomCount),
        }

        roomItem = {
            cost: Number(cost),
            seatsCount: Number(seatsCount),
            typeName: typeName,
            roomPhotos: roomPhotos,
            roomCount: Number(roomCount),
        }

        // rooms[index] = room;
        // setRooms(rooms);
        cancel();
    }

    function cancel() {
        setRoomPhotos([]);
        setCost(0);  
        setSeatsCount(0);
        setTypeName('');
        setRoomCount(0);
        handleClose();
    } 

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Formik
                    initialValues={{
                        password: '',
                        login: '',
                    }}
                //validate={checkLoginData}
                //onSubmit={authorizeClick}
                >
                    {({ errors }) => (
                        <Form className='creatingRoomModalContainer'>
                            <Typography variant="h3" component="h2">
                                Room creation
                            </Typography>
                            <div className='colorContainer'>
                                <div className='roomModalRow'>
                                    <div className='roomModalCell'>
                                        <h3>Room type name:</h3>
                                        <TextField
                                            type={'text'}
                                            value={typeName}
                                            onInput={onTextChange}
                                            placeholder="Type name"
                                            variant="standard"
                                        />
                                    </div>
                                    <div className='roomModalCell'>
                                        <h3>Seats Count:</h3>
                                        <TextField
                                            type={'number'}
                                            value={seatsCount}
                                            onInput={onSeatsChange}
                                            placeholder="Seats Count"
                                            variant="standard"
                                        />
                                    </div>
                                </div>
                                <CreationPhotoCarousel photos={roomPhotos} setPhotos={setRoomPhotos} />
                                <div className='roomModalRow'>
                                    <div className='roomModalCell'>
                                        <h3>Cost:</h3>
                                        <TextField
                                            type={'number'}
                                            value={cost}
                                            onInput={onCostChange}
                                            placeholder="Cost"
                                            variant="standard"
                                        />
                                    </div>
                                    <div className='roomModalCell'>
                                        <h3>Rooms Count:</h3>
                                        <TextField
                                            type={'number'}
                                            value={roomCount}
                                            onInput={onRoomCountChange}
                                            placeholder="Rooms Count"
                                            variant="standard"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='roomModalRow'>
                                <Button variant="contained" className='roomModalBtn' onClick={cancel}>Cancel</Button>
                                {!roomItem && <Button variant="contained" type="submit" className='roomModalBtn' onClick={createRoom}>Create</Button>}
                                {roomItem && <Button variant="contained" type="submit" className='roomModalBtn' onClick={updateRoom}>Update</Button>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default CreatingRoomModal;