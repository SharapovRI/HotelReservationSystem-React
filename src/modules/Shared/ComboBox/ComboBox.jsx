import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';

const ComboBox = ( {option, setOption, getOptionLabel, boxText, labelText} ) => {

    const [appState, setAppState] = useState();
  
    useEffect(() => {
        const apiUrl = 'https://localhost:44382/Locates';
        axios.get(apiUrl)
        .then((resp) => {
            const allPersons = resp.data;
            setAppState(allPersons);
        })
        .catch(async function (error) {
            if (error.response) {

            }
        });
    }, [setAppState]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={appState}
      sx={{ width: 300 }}

      onChange={(event, newValue) => {
        if (newValue !== null)
        {
          setOption(newValue.id) /////////////TODO country id
        }
        else {
          setOption('');
        }
      }
      }
      defaultValue={option}

      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.id}>
          {boxText(option)}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label={labelText} />}
    />

  );
}

export default ComboBox;


  
