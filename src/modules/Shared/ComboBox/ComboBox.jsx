import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';

const ComboBox = ({ filter, setOption, setCountry, getOptionLabel, boxText, labelText }) => {

  const [appState, setAppState] = useState([]);

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

  useEffect(() => {
    if (filter && appState.length > 0) {
      const currentLocate = appState[appState.findIndex((locate) => locate.city === filter)];
      setOption(currentLocate.id);
      setCountry(currentLocate.countryId);
    }
  }, [appState])

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={appState}
      sx={{ width: 300 }}

      onChange={(event, newValue) => {
        if (newValue !== null) {
          setOption(newValue.id);
          setCountry(newValue.countryId);
        }
        else {
          setOption('');
          setCountry('');
        }
      }
      }
      value={filter && appState.length > 0 && appState[appState.findIndex((locate) => locate.city === filter)]}

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