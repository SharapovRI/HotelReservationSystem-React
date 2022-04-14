import './CreatingFacilityModal.scss';
import { Formik, Form } from 'formik';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCreatedFacility, updateCreatedFacility } from "../../../../../redux/Reducers/FacilitiesReducer";
import DeleteFacilityModal from '../DeleteFacilityModal/DeleteFacilityModal/DeleteFacilityModal';
import checkFacilityData from '../../../../../services/Validation/facilityCreationDataValidation';
import Tooltip from '@mui/material/Tooltip';

const CreatingFacilityModal = ({ open, handleClose, facilityItem, index }) => {
    const [facilityName, setFacilityName] = useState('');
    const [cost, setCost] = useState(0);

    const [openAlert, setAlertOpen] = useState(false);
    const handleClickOpen = () => {
        setAlertOpen(true);
    }
    const handleClickClose = () => setAlertOpen(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (facilityItem) {
            setFacilityName(facilityItem.name);
            setCost(facilityItem.cost);
        }
    }, [setCost, facilityItem]);

    const onTextChange = (event) => {
        setFacilityName(event.target.value);
    }

    const onCostChange = (event) => {
        if (event.target.value < 0) {
            setCost(0);
        }
        else {
            setCost(event.target.value);
        }
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
            id: facilityItem.id,
            cost: Number(cost),
            name: facilityName,
        }
        dispatch(updateCreatedFacility({ index, facility }));
        handleClose();
    }

    function cancel() {
        setFacilityName('');
        setCost(0);
        handleClose();
    }

    function actionFacility() {
        !facilityItem && createFacility()
        facilityItem && updateFacility()
    }

    function getStyles(errors) {
        if (errors) {
            return {
                border: '1px solid red'
            }
        }
    }

    function validateFacilityParameters() {
        const values = {
            facilityName: facilityName,
            cost: cost,
        }
        const errors = checkFacilityData(values);
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
                    validate={validateFacilityParameters}
                    onSubmit={actionFacility}
                >
                    {({ errors }) => (
                        <Form className='creatingFacilityModalContainer'>
                            <div className='cfmc_header'>
                                <h3>Facility creation</h3>
                            </div>
                            <div className='color_container'>
                                <Tooltip open={true} title={errors.facilityName} className='modal_tooltip'>
                                    <div className="cfmc_cc_item">
                                        <label className='cfmc_cc_label'>Facility name:</label>
                                        <TextField
                                            type={'text'}
                                            defaultValue={facilityName}
                                            onInput={onTextChange}
                                            variant="standard"
                                            style={getStyles(errors.facilityName)}
                                        />
                                    </div>
                                </Tooltip>
                                <Tooltip open={true} title={errors.cost}>
                                    <div className="cfmc_cc_item">
                                        <label className='cfmc_cc_label'>Cost:</label>
                                        <TextField
                                            type={'number'}
                                            value={cost}
                                            onInput={onCostChange}
                                            variant="standard"
                                            style={getStyles(errors.cost)}
                                        />
                                    </div>
                                </Tooltip>
                            </div>
                            <div className='cfmc_buttons'>
                                {!facilityItem && <Button variant="contained" className='facilityModalBtn' onClick={cancel}>Cancel</Button>}
                                {!facilityItem && <Button variant="contained" type="submit" className='facilityModalBtn'>Create</Button>}

                                {facilityItem && <Button variant="contained" className='facilityModalBtn' onClick={() => handleClose()}>Cancel</Button>}
                                {facilityItem && <Button variant="contained" type="submit" className='facilityModalBtn'>Update</Button>}
                            </div>

                            {facilityItem && <Button variant="contained" className='facilityModalDeleteBtn' onClick={handleClickOpen}>Delete</Button>}
                            <DeleteFacilityModal open={openAlert} handleClickClose={handleClickClose} handleClose={() => handleClose()} index={index} />
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default CreatingFacilityModal;