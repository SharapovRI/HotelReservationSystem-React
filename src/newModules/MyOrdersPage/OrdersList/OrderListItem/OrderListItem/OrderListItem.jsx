import { useEffect, useState } from 'react';
import OrderInfo from '../OrderInfo/OrderInfo/OrderInfo';
import Modal from '@mui/material/Modal';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import ClockPicker from '@mui/lab/ClockPicker';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import './OrderListItem.scss';
import moment from 'moment';

const OrderListItem = ({ orderGroup }) => {
    const [hotel, setHotel] = useState();
    const [date, setDate] = useState(new Date());
    const [arrivalDate, setArrivalDate] = useState(null);
    const [arrivalTime, setArrivalTime] = useState();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        const order = orderGroup?.orders[0];
        const formatString = 'ddd, MMM D. YYYY';
        const arrival_date = new Date(order?.checkInTime);
        const arrival_time = moment(arrival_date.toJSON()).format('hh:mm a');;
        const arrival = moment(arrival_date.toJSON()).format(formatString);

        setArrivalTime(arrival_time);
        setArrivalDate(arrival_date);
    }, [orderGroup])

    return (
        <div className="order_list_item">
            <div className="order_list_header">
                <h3>{hotel?.name}</h3>
            </div>
            <div className="order_list_main">
                <OrderInfo orderGroup={orderGroup} hotel={hotel} setHotel={setHotel} />
            </div>
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
                </div>
            </Modal>
        </div>
    )
}

export default OrderListItem;