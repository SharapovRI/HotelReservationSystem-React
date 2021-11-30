import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioTime = ( { time, setTime } ) => {

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Time</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        value={time}
        onChange={handleChange}
        defaultValue="true"
      >
        <FormControlLabel value={''} control={<Radio />} label="All" />
        <FormControlLabel value={false} control={<Radio />} label="Past" />
        <FormControlLabel value={true} control={<Radio />} label="Future" />
      </RadioGroup>
    </FormControl>
  );
}

export default RadioTime;
