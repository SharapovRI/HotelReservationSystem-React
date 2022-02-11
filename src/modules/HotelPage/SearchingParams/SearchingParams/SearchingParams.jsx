import './SearchingParams.scss';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Formik, Form, Field } from 'formik';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import DatePickerModal from '../DatePickerModal/DatePickerModal/DatePickerModal';
import checkHomePageSearchingData from '../../../../services/Validation/homePageSearchingDataValidation';
import Tooltip from '@mui/material/Tooltip';

const SearchingParams = ({ filter, setFilter }) => {
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [date, setDate] = useState([new Date(), new Date()]);
    const [seatsCount, setSeatsCount] = useState(0);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onSeatsChange = (event) => {
        if (event.target.value < 0) {
            setSeatsCount(0);
        }
        else {
            setSeatsCount(event.target.value);
        }
    }

    useEffect(() => {
        const formatString = 'ddd, MMM D. YYYY';
        const arrival = moment(new Date(filter?.checkIn)).format(formatString);
        const departure = moment(new Date(filter?.checkOut)).format(formatString);

        setArrivalDate(arrival);
        setDepartureDate(departure);
        setDate([new Date(filter?.checkIn), new Date(filter?.checkOut)]);
        setSeatsCount(filter?.freeSeatsCount)
    }, [filter]);

    function changeFilter() {
        let newFilter = {};
        Object.assign(newFilter, filter);
        newFilter.checkIn = new Date(date[0]);
        newFilter.checkOut = new Date(date[1]);
        newFilter.freeSeatsCount = seatsCount;
        setFilter(newFilter);
        handleClose();
    }

    function getStyles(errors) {
        if (errors) {
            return {
                border: '1px solid red'
            }
        }
    }

    function validateSearchingParameters() {
        const values = {
            city: 1,
            seats: seatsCount,
        }
        const errors = checkHomePageSearchingData(values);
        return errors;
    }

    return (
        <>
            <div className='paramItem'>
                <div className='dataParam'>
                    <label>Date come:</label>
                    <br />
                    <strong>{arrivalDate}</strong>
                </div>
                <div className='dataParam'>
                    <label>Date out:</label>
                    <br />
                    <strong>{departureDate}</strong>
                </div>
            </div>
            <div className='paramItem'>
                <div>
                    <label>Need seats:</label>
                    <br />
                    <strong>{filter?.freeSeatsCount}</strong>
                </div>
            </div>
            <div className='paramBtn'>
                <Button variant="contained" type="submit" className='paramButton' onClick={handleOpen}>Сhange search parameters</Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Formik
                    initialValues={{
                        password: '',
                        login: '',
                    }}
                    validate={validateSearchingParameters}
                    onSubmit={changeFilter}
                >
                    {({ errors }) => (
                        <Form className='searching_params_modal'>
                            <div className='searching_params_modal_container'>
                                <div className="spmc_title">
                                    <h3>Change the search data</h3>
                                </div>
                                <div className="spmc_input_area">
                                    <div className="spmc_ia_item">
                                        <DatePickerModal date={date} setDate={(newValue) => setDate(newValue)} />
                                    </div>
                                    <Tooltip open={true} title={errors.seats}>
                                        <div className="spmc_ia_item">
                                            <label className='saf_item_label'>Seats count</label>
                                            <TextField id="outlined-basic"
                                                className='seatsCountField'
                                                type={'number'}
                                                value={seatsCount}
                                                onInput={onSeatsChange}
                                                variant="outlined"
                                                style={getStyles(errors.seats)}
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className="spmc_buttons">
                                    <Button variant="contained" type="submit">View the availability of seats</Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}

export default SearchingParams;