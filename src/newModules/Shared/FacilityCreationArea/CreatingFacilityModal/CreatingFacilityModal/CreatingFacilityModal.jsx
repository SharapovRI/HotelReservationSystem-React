import './CreatingFacilityModal.scss';
import { Formik, Form, Field } from 'formik';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCreatedFacility, updateCreatedFacility } from "../../../../../redux/Reducers/FacilitiesReducer";
import DeleteFacilityModal from '../DeleteFacilityModal/DeleteFacilityModal/DeleteFacilityModal';

const CreatingFacilityModal = ({ open, handleClose, facilityItem, index }) => {
    const [facilityName, setFacilityName] = useState('');
    const [cost, setCost] = useState(0);

    const [openAlert, setAlertOpen] = useState(false);
    const handleClickOpen = () => setAlertOpen(true);
    const handleClickClose = () => setAlertOpen(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (facilityItem)
        {
            setFacilityName(facilityItem.name);
            setCost(facilityItem.cost);
        }
    }, []);

    const onTextChange = (event) => {
        setFacilityName(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    function createFacility() {
        const facility = {
            cost: Number(cost),
            name: facilityName,
        }

        dispatch(addCreatedFacility(facility));
        cancel();
    }

    function updateFacility() {
        const facility = {
            cost: Number(cost),
            name: facilityName,
        }
        dispatch(updateCreatedFacility({index, facility}));
        handleClose();
    }

    function cancel() {
        setFacilityName('');
        setCost(0);  
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
                        <Form className='creatingFacilityModalContainer'>
                            <Typography variant="h3" component="h2">
                                Facility creation
                            </Typography>
                            <div className='colorContainer'>
                                <div className='facilityModalRow'>
                                    <div className="facilityModalCell">
                                        <h3>Facility name:</h3>
                                        <TextField
                                            type={'text'}
                                            defaultValue={facilityName}
                                            onInput={onTextChange}
                                            variant="standard"
                                        />
                                    </div>
                                </div>
                                <div className='facilityModalRow'>
                                    <div className="facilityModalCell">
                                        <h3>Cost:</h3>
                                        <TextField
                                            type={'number'}
                                            defaultValue={cost}
                                            onInput={onCostChange}
                                            variant="standard"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='facilityModalRow'>
                                {!facilityItem && <Button variant="contained" className='facilityModalBtn' onClick={cancel}>Cancel</Button>}
                                {!facilityItem && <Button variant="contained" type="submit" className='facilityModalBtn' onClick={createFacility}>Create</Button>}
                                
                                {facilityItem && <Button variant="contained" className='facilityModalBtn' onClick={handleClose}>Cancel</Button>}
                                {facilityItem && <Button variant="contained" type="submit" className='facilityModalBtn' onClick={updateFacility}>Update</Button>}
                            </div>

                            {facilityItem && <Button variant="contained" type="submit" className='facilityModalDeleteBtn' onClick={handleClickOpen}>Delete</Button>}
                            <DeleteFacilityModal open={openAlert} handleClickClose={handleClickClose} handleClose={handleClose} index={index}/>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default CreatingFacilityModal;