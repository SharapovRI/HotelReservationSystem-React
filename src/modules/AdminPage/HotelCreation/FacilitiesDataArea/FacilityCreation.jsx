import { useState } from "react";
import TextField from '@mui/material/TextField';

const FacilityCreation = ( { facilities, setFacilities } ) => {
    const [facilityName, setFacilityName] = useState('');
    const [cost, setCost] = useState(1);

    const onNameChange = (event) =>{
        setFacilityName(event.target.value);
    }

    const onCostChange = (event) =>{
        setCost(event.target.value);
    }

    const addItem = () => {
        const newItem = {
            facilityName : facilityName,
            cost: Number(cost),
        }        
        setFacilities([...facilities, newItem]);

        setFacilityName('');
        setCost(1);
    }

    return(
        <div>
            <TextField id="outlined-basic"
                type={'text'}
                defaultValue={facilityName}
                value={facilityName}
                onInput={onNameChange}
                label="Facility name"
                variant="outlined"
            />
            <TextField id="outlined-basic"
                type={'number'} 
                defaultValue={cost} 
                value={cost} 
                onInput={onCostChange} 
                label="Cost" 
                variant="outlined" 
                min={1}
            />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

export default FacilityCreation;