import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';
import instance from "../../../services/API/API";

import './ComboBox.scss';

const ComboBox = ({ cityName, cityId, countryId, setOption, setCountry, getOptionLabel, boxText, labelText }) => {

  const [appState, setAppState] = useState([]);
  const [curValue, setCurValue] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://localhost:44382/Locates';
    instance.get(apiUrl)
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
    if (countryId && (cityId == 'null' || cityId == 0) && appState.length > 0) {
      const currentLocate = appState[appState.findIndex((locate) => locate.countryId == Number(countryId))];

      if (currentLocate) {
        setOption(currentLocate.id);
        setCountry(currentLocate.countryId);
        setCurValue(currentLocate);
      }
    }
    else if (cityId && appState.length > 0) {
      const currentLocate = appState[appState.findIndex((locate) => locate.id === Number(cityId))];

      if (currentLocate) {
        setOption(currentLocate.id);
        setCountry(currentLocate.countryId);
        setCurValue(currentLocate);
      }
    }
    else if (cityName && appState.length > 0) {
      const currentLocate = appState[appState.findIndex((locate) => locate.city === cityName)];
      if (currentLocate) {
        setOption(currentLocate.id);
        setCountry(currentLocate.countryId);
        setCurValue(currentLocate);
      }
    };
  }, [appState, cityName, cityId, countryId])

  return (
    <Autocomplete
      disablePortal
      options={appState}

      onChange={(event, newValue) => {
        if (newValue !== null) {
          setOption(newValue.id);
          setCountry(newValue.countryId);
          setCurValue(newValue);
        }
        else {
          setOption('');
          setCountry('');
          setCurValue(null);
        }
      }
      }

      value={curValue}

      getOptionLabel={getOptionLabel}
      renderOption={(props, option) => (
        <Box component="li" {...props} key={option.id}>
          {boxText(option)}
        </Box>
      )}
      renderInput={(params) => <TextField {...params}
        placeholder={labelText} />}
    />

  );
}

export default ComboBox;