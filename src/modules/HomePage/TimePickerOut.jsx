import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

const TimePickerOut = ( {timeOut, setTimeOut} ) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <TimePicker
          ampm={false}
          renderInput={(params) => <TextField {...params} />}
          value={timeOut}
          label="Out time"
          onChange={(newValue) => {
            setTimeOut(newValue);
          }}
          minTime={new Date(0, 0, 0, 1)}
          maxTime={new Date(0, 0, 0, 12)}
        />
        </Stack>
    </LocalizationProvider>
  );
}

export default TimePickerOut