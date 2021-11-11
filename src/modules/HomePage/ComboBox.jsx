import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const ComboBox = ( {city, setCity} ) => {

    const navigate = useNavigate();
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
        setCity(newValue.id)
      }
      }
      defaultValue={city}

      getOptionLabel={(option) => option.id + ' ' + option.country + ' ' + option.city}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.id}>
          ({option.country}) {option.city}
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="Locates" />}
    />

  );
}

export default ComboBox;


  
