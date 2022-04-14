import './TimePickerIn.scss';

import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

const TimePickerIn = ( {timeIn, setTimeIn} ) => {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='time_picker_container'>
          <TimePicker
            ampm={false}
            renderInput={(params) => <TextField {...params} />}
            value={timeIn}
            onChange={(newValue) => {
              setTimeIn(newValue);
            }}
            minTime={new Date(0, 0, 0, 14)}
          />
          </div>
      </LocalizationProvider>
    );
  }
  
  export default TimePickerIn;