import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}$`;
}

const minDistance = 1;

const CostSlider = ( { minCost, setMinCost, maxCost, setMaxCost } ) => {
    const value1 = ([minCost, maxCost]);

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setMinCost(Math.min(newValue[0], value1[1] - minDistance));
        } else {
            setMaxCost(Math.max(newValue[1], value1[0] + minDistance));
        }
    };

    return (
        <div>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value1}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </div>
    )
}

export default CostSlider;