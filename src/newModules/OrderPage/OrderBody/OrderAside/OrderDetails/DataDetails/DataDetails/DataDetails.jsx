import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './DataDetails.scss';

const DataDetails = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [arrivalDate, setArrivalDate] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const formatString = 'ddd, MMM D. YYYY';

    useEffect(() => {
        const arrival = moment(new Date(searchParams.get('checkIn')).toJSON()).format(formatString);
        const departure = moment(new Date(searchParams.get('checkOut')).toJSON()).format(formatString);
        setArrivalDate(arrival);
        setDepartureDate(departure);
    }, [setArrivalDate, setDepartureDate])

    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);
    
        const oneDay = 1000 * 60 * 60 * 24;
    
        const diffInTime = date2.getTime() - date1.getTime();
    
        const diffInDays = Math.round(diffInTime / oneDay);
    
        return diffInDays;
    }

    function getDuration() {
        let value = getNumberOfDays(new Date(searchParams.get('checkIn')).toJSON(), new Date(searchParams.get('checkOut')).toJSON());
        let duration = 0;
        if (value == 1) {
            duration = value + ' night';
        }
        else if (value > 1) {
            duration = value + ' nights';
        }
        else {
            duration = 'invalid time';
        }

        return duration;
    }
    
    return (
        <div className='data_details'>
            <div className="data_range">
                <div className="data_range_item">
                    <div className="dr_item_header">
                        <p>Come in:</p>
                    </div>
                    <time className='dr_time'>
                        <span className='title'>{arrivalDate}</span>
                        <span className='subtitle'>14:00 - 00:00</span>
                    </time>
                </div>
                <div className="data_range_item">
                    <div className="dr_item_header">
                        <p>Come out:</p>
                    </div>
                    <time className='dr_time'>
                        <span className='title'>{departureDate}</span>
                        <span className='subtitle'>00:00 - 12:00</span>
                    </time>
                </div>
            </div>
            <div className='total_duration'>
                <div className="total_duration_header">
                    <h3>Total duration:</h3>
                </div>
                <div className='total_duration_value'>
                    <h3>{getDuration()}</h3>
                </div>
            </div>
        </div>
    )
}

export default DataDetails;