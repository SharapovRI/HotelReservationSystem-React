import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

import './DatePickerRange.scss';

const DatePickerRange = ( {date, setDate} ) => { 

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText="Check-in"
        endText="Check-out"
        value={date}
        allowSameDateSelection={false}
        onChange={(newValue) => {
            setDate(newValue);
        }}
        minDate={new Date()}
        renderInput={(startProps, endProps) => (
          <div className='datePickerCellsFormat'>
            <TextField {...startProps} />
            <TextField {...endProps} />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerRange