import moment from 'moment';
import { useEffect, useState } from 'react';
import getHotels from '../../../../../../api/apiRequests/getHotels';
import OrderRoomList from '../OrderRoomList/OrderRoomList/OrderRoomList';
import OrderHotelInfo from '../OrderHotelInfo/OrderHotelInfo/OrderHotelInfo';
import './OrderInfo.scss';
import OrderTotalCost from '../OrderTotalCost/OrderTotalCost/OrderTotalCost';

const OrderInfo = ({ orderGroup, hotel, setHotel }) => {
    const [hotelId, setHotelId] = useState(-1);
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [arrivalTime, setArrivalTime] = useState();

    useEffect(() => {
        const formatString = 'ddd, MMM D. YYYY';
        const order = orderGroup?.orders[0];
        const arrival_date = new Date(order?.checkInTime);
        const arrival_time = moment(arrival_date.toJSON()).format('hh:mm a');;
        const arrival = moment(arrival_date.toJSON()).format(formatString);
        const departure = moment(new Date(order.checkOutTime).toJSON()).format(formatString);
       
        setArrivalTime(arrival_time);
        setArrivalDate(arrival);
        setDepartureDate(departure);
    }, [setArrivalDate, setDepartureDate]);

    useEffect(() => {
        async function fetchHotel()
        {
            const payload = {
                id: hotelId,
            }
            const data = await getHotels(payload);
            setHotel(data?.result[0]);
        }

        {hotelId && hotelId != -1 && fetchHotel()}
    }, [hotelId])

    return (
        <div className="oli_info">
            <OrderHotelInfo hotel={hotel} />
            <div className="oli_order_info oli_info_item">
                <div className="oli_data_range">
                    <div className="oli_data_range_item">
                            <p>Come in:</p>
                        <time className='oli_dr_time'>
                            <span className='title'>{arrivalDate}</span>
                            <span className='subtitle'>{arrivalTime}</span>
                        </time>
                    </div>
                    <div className="oli_data_range_item">
                        <p>Come out:</p>
                        <time className='oli_dr_time'>
                            <span className='title'>{departureDate}</span>
                            <span className='subtitle'>00:00 - 12:00 am</span>
                        </time>
                    </div>
                    {arrivalDate && departureDate && <OrderTotalCost arrivalDate={arrivalDate} departureDate={departureDate} orderGroup={orderGroup} />}
                </div>
            </div>
            <OrderRoomList orders={orderGroup?.orders} setHotelId={setHotelId}/>
        </div>
    )
}

export default OrderInfo;