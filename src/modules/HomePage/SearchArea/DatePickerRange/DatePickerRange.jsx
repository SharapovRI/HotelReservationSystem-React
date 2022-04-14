import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import moment from 'moment';

const DatePickerRange = ({ date, setDate }) => {
  const [dateValue, setDateValue] = React.useState(['q', 'q']);
  const formatString = 'ddd, MMM D. YYYY';

  React.useEffect(() => {
    if (date[0] && date[1]) {
      const arrival = moment(new Date(date[0])).format(formatString);
      const departure = moment(new Date(date[1])).format(formatString);
      setDateValue([arrival, departure]);
    }
  }, [date])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText=""
        endText=""
        value={date}
        allowSameDateSelection={false}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        minDate={new Date()}
        inputFormat={'EEE, MMM dd, yyyy'}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> - </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePickerRange