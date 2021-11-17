import React from 'react';
import Slider from '@mui/material/Slider';

function valueToCurrency(value) {
    return `${value}$`;
}

const minDistance = 1;

const CostSlider = ( { minCost, setMinCost, maxCost, setMaxCost } ) => {
    const value = ([minCost, maxCost]);

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setMinCost(Math.min(newValue[0], value[1] - minDistance));
        } else {
            setMaxCost(Math.max(newValue[1], value[0] + minDistance));
        }
    };

    return (
        <div>
            <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valueToCurrency}
                disableSwap
            />
        </div>
    )
}

export default CostSlider;