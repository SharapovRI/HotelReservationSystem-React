import TimePickerIn from '../TimePickerIn/TimePickerIn/TimePickerIn';
import './TimeSection.scss';

const TimeSection = ({timeIn, setTimeIn}) => {
    return (
        <div className="time_section">
            <div className="ts_header">
                <h3>Your arrival time</h3>
            </div>
            <div className="ts_info">
                <div className="ts_info_item">
                    <h3>Your room will be ready for check-in from 14:00 to 00:00</h3>
                </div>
            </div>
            <div className="ts_time_select">
                <div className="ts_info_item">
                    <h3>Specify the approximate time of arrival</h3>
                </div>
                <TimePickerIn timeIn={timeIn} setTimeIn={setTimeIn} />
                <div className="ts_info_helper">
                    <h3>Local time of the destination city</h3>
                </div>
            </div>
        </div>
    )
}

export default TimeSection;