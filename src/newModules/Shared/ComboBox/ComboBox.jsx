import React, { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import axios from 'axios';
import instance from "../../../services/API/API";

import './ComboBox.scss';

const ComboBox = ({ cityName, cityId, setOption, setCountry, getOptionLabel, boxText, labelText }) => {

  const [appState, setAppState] = useState([]);
  const [curValue, setCurValue] = useState(null);

  useEffect(() => {
    console.log(cityName, cityId);
    const apiUrl = 'https://localhost:44382/Locates';
    instance.get(apiUrl)
      .then((resp) => {
        const allPersons = resp.data;
        setAppState(allPersons);
        console.log(allPersons);
      })
      .catch(async function (error) {
        if (error.response) {

        }
      });
  }, [setAppState]);

  useEffect(() => {
    if (cityId && appState.length > 0) {
      const currentLocate = appState[appState.findIndex((locate) => locate.id === Number(cityId))];
      setOption(currentLocate.id);
      setCountry(currentLocate.countryId);
      setCurValue(currentLocate);
    }
    else if (cityName && appState.length > 0) {
      const currentLocate = appState[appState.findIndex((locate) => locate.city === cityName)];
      setOption(currentLocate.id);
      setCountry(currentLocate.countryId);
      setCurValue(currentLocate);
    };
  }, [appState, cityName, cityId])

  function getDefValue() {
    if (cityId && appState.length > 0) {
      console.log("a");
      console.log(appState[appState.findIndex((locate) => locate.id === cityId)]);
      return appState[appState.findIndex((locate) => locate.id === cityId)];
    }

    if (cityName && appState.length > 0) {
      console.log("b");
      return appState[appState.findIndex((locate) => locate.city === cityName)];
    }
    console.log("c");
    return undefined;
  }

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={appState}

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

      value={curValue}

      // (cityName && appState.length > 0 && appState[appState.findIndex((locate) => locate.city === cityName)]) ||
      // (cityId && appState.length > 0 && appState[appState.findIndex((locate) => locate.id === cityId)]) 


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