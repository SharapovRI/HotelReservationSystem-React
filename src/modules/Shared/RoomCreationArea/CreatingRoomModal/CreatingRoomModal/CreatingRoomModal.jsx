import './CreatingRoomModal.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import CreationPhotoCarousel from '../../../../Shared/CreationPhotoCarousel/CreationPhotoCarousel/CreationPhotoCarousel';
import { Formik, Form, Field } from 'formik';
import { addCreatedRoom, addRooms, updateCreatedRoom, updateRoomState } from '../../../../../redux/Reducers/RoomReducer';
import { useDispatch } from 'react-redux';
import checkRoomCreationData from '../../../../../services/Validation/roomCreationDataValidation';
import Tooltip from '@mui/material/Tooltip';

const CreatingRoomModal = ({ open, handleClose, roomItem, index }) => {
    const [roomPhotos, setRoomPhotos] = useState([]);
    const [seatsCount, setSeatsCount] = useState(1);
    const [typeName, setTypeName] = useState('');
    const [cost, setCost] = useState(0);
    const [roomCount, setRoomCount] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (roomItem) {
            setRoomPhotos(roomItem.roomPhotos);
            setSeatsCount(roomItem.seatsCount);
            setTypeName(roomItem.typeName);
            setCost(roomItem.cost);
            setRoomCount(roomItem.roomCount);
        }
    }, []);

    const onSeatsChange = (event) => {
        if (event.target.value < 1) {
            setSeatsCount(1);
        }
        else {
            setSeatsCount(event.target.value);
        }
    }

    const onTextChange = (event) => {
        setTypeName(event.target.value);
    }

    const onCostChange = (event) => {
        if (event.target.value < 0) {
            setCost(0);
        }
        else {
            setCost(event.target.value);
        }
    }

    const onRoomCountChange = (event) => {
        if (event.target.value < 1) {
            setRoomCount(1);
        }
        else {
            setRoomCount(event.target.value);
        }
    }

    function createRoom() {
        const room = {
            cost: Number(cost),
            seatsCount: Number(seatsCount),
            typeName: typeName,
            roomPhotos: roomPhotos,
            roomCount: Number(roomCount),
        }

        dispatch(addCreatedRoom(room));
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

        dispatch(updateCreatedRoom({ index, room }));
        handleClose();
    }

    function cancel() {
        setRoomPhotos([]);
        setCost(0);
        setSeatsCount(0);
        setTypeName('');
        setRoomCount(0);
        handleClose();
    }

    function actionRoom() {
        { !roomItem && createRoom() }
        { roomItem && updateRoom() }
    }

    function getStyles(errors) {
        if (errors) {
            return {
                border: '1px solid red'
            }
        }
    }

    function validateCreatingParameters() {
        const values = {
            roomCount: roomCount,
            typeName: typeName,
            cost: cost,
            seats: seatsCount,
        }
        const errors = checkRoomCreationData(values);
        return errors;
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
                    validate={validateCreatingParameters}
                    onSubmit={actionRoom}
                >
                    {({ errors }) => (
                        <Form className='creatingRoomModalContainer'>
                            <div className='crmc_header'>
                                <h3>Room creation</h3>
                            </div>
                            <div className='crmc_container'>
                                <Tooltip open={true} title={errors.typeName}>
                                    <div className='crmc_cc_item'>
                                        <label className='crmc_cc_label'>Room type name:</label>
                                        <TextField
                                            type={'text'}
                                            value={typeName}
                                            onInput={onTextChange}
                                            placeholder="Type name"
                                            variant="standard"
                                            style={getStyles(errors.typeName)}
                                        />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.seats}>
                                    <div className='crmc_cc_item'>
                                        <label className='crmc_cc_label'>Seats Count:</label>
                                        <TextField
                                            type={'number'}
                                            value={seatsCount}
                                            onInput={onSeatsChange}
                                            placeholder="Seats Count"
                                            variant="standard"
                                            style={getStyles(errors.seats)}
                                        />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.cost}>
                                    <div className='crmc_cc_item'>
                                        <label className='crmc_cc_label'>Cost:</label>
                                        <TextField
                                            type={'number'}
                                            value={cost}
                                            onInput={onCostChange}
                                            placeholder="Cost"
                                            variant="standard"
                                            style={getStyles(errors.cost)}
                                        />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.roomCount}>
                                    <div className='crmc_cc_item'>
                                        <label className='crmc_cc_label'>Rooms Count:</label>
                                        <TextField
                                            type={'number'}
                                            value={roomCount}
                                            onInput={onRoomCountChange}
                                            placeholder="Rooms Count"
                                            variant="standard"
                                            style={getStyles(errors.roomCount)}
                                        />
                                    </div>
                                </Tooltip>
                            </div>
                            <CreationPhotoCarousel photos={roomPhotos} setPhotos={setRoomPhotos} />
                            <div className='roomModalRow'>
                                {!roomItem && <Button variant="contained" className='roomModalBtn' onClick={cancel}>Cancel</Button>}
                                {!roomItem && <Button variant="contained" type="submit" className='roomModalBtn'>Create</Button>}

                                {roomItem && <Button variant="contained" className='roomModalBtn' onClick={handleClose}>Cancel</Button>}
                                {roomItem && <Button variant="contained" type="submit" className='roomModalBtn'>Update</Button>}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default CreatingRoomModal;