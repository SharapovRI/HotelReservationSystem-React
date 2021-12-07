import { useState } from "react";
import TextField from '@mui/material/TextField';
import { styles } from "../../../HomePage/styles/styles";

const FacilityCreation = ({ facilities, setFacilities }) => {
    const [facilityName, setFacilityName] = useState('');
    const [cost, setCost] = useState(1);

    const onNameChange = (event) => {
        setFacilityName(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    const addItem = () => {
        const newItem = {
            name: facilityName,
            cost: Number(cost),
        }
        setFacilities([...facilities, newItem]);

        setFacilityName('');
        setCost(1);
    }

    return (
        <div>
            <div style={styles.SearchAreaElement}>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={facilityName}
                    value={facilityName}
                    onInput={onNameChange}
                    label="Facility name"
                    variant="outlined"
                />
            </div>
            <div style={styles.SearchAreaElement}>
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={cost}
                    value={cost}
                    onInput={onCostChange}
                    label="Cost"
                    variant="outlined"
                    min={1}
                />
            </div>
            <div style={styles.SearchAreaElement}>
                <button onClick={addItem}>Add</button>
            </div>
        </div>
    )
}

export default FacilityCreation;