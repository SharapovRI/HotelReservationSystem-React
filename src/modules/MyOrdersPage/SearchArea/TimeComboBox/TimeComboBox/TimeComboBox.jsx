import './TimeComboBox.scss';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';

const times = [
    { label: 'All orders', value: '' },
    { label: 'Past orders', value: false },
    { label: 'Future orders', value: true },
];

const TimeComboBox = ({setTime}) => {
    const [value, setValue] = useState(times[0]);

    useEffect(() => {
        setTime(value.value);
    }, [value])

    return (
        <Autocomplete
            value={value.label}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            disablePortal
            id="combo-box-demo"
            options={times}
            renderInput={(params) => <TextField {...params} />}
        />
    );
}

export default TimeComboBox;