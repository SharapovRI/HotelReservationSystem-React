import { useEffect, useState } from 'react';
import OrderInfo from '../OrderInfo/OrderInfo/OrderInfo';
import Modal from '@mui/material/Modal';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ClockPicker from '@mui/lab/ClockPicker';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import moment from 'moment';
import './OrderListItem.scss';
import putOrderTime from '../../../../../api/apiRequests/putOrderTime';

const OrderListItem = ({ orderGroup }) => {
    const [hotel, setHotel] = useState();
    const [arrivalDate, setArrivalDate] = useState(null);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const order = orderGroup?.orders[0];
        const formatString = 'ddd, MMM D. YYYY';
        const arrival_date = new Date(order?.checkInTime);

        setArrivalDate(arrival_date);
    }, [orderGroup])

    function saveNewArrivalTime() {
        async function postNewTime() {
            const payload = {
                id: orderGroup.id,
                checkInTime: arrivalDate,
            }
            const result = await putOrderTime(payload);
        }

        postNewTime();
        handleClose();
    }

    function cancelClick() {
        const order = orderGroup?.orders[0];
        const arrival_date = new Date(order?.checkInTime);
        setArrivalDate(arrival_date);
        handleClose();
    }

    return (
        <div className="order_list_item">
            <div className="order_list_header">
                <h3>{hotel?.name}</h3>
            </div>
            <div className="order_list_main">
                <OrderInfo orderGroup={orderGroup} hotel={hotel} setHotel={setHotel} />
            </div>
            {orderGroup?.orders[0].checkInTime > new Date().toJSON() &&
                <>
                    <div className="oli_buttons">
                        <button onClick={handleOpen}>Edit arrival time</button>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                    >
                        <div className="oli_time_edit_modal">
                            <div className="oli_tem_header"></div>
                            <div className="oli_tem_body">
                                <div className="time_picker">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <StaticTimePicker
                                            date={arrivalDate}
                                            onChange={(newDate) => setArrivalDate(newDate)}
                                            minTime={new Date(0, 0, 0, 14)}
                                            ampm
                                            orientation="landscape"
                                            openTo="minutes"
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className="oli_tem_buttons">
                                    <button className='oli_tem_button' onClick={cancelClick}>Cancel</button>
                                    <button className='oli_tem_button' onClick={saveNewArrivalTime}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                </>
            }
        </div>
    )
}

export default OrderListItem;