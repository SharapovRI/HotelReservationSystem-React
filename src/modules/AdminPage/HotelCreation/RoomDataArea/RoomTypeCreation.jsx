import { useState } from "react";
import TextField from '@mui/material/TextField';
import { styles } from "../../../HomePage/styles/styles";

const RoomTypeCreation = ({ rooms, setRooms }) => {
    const [typeName, setTypeName] = useState('');
    const [seatsCount, setSeatsCount] = useState(1);
    const [cost, setCost] = useState(1);

    const onNameChange = (event) => {
        setTypeName(event.target.value);
    }

    const onSeatsChange = (event) => {
        setSeatsCount(event.target.value);
    }

    const onCostChange = (event) => {
        setCost(event.target.value);
    }

    const addItem = () => {
        const newItem = {
            typeName: typeName,
            seatsCount: seatsCount,
            cost: cost,
        }


        setRooms([...rooms, newItem]);

        setTypeName('');
        setSeatsCount(1);
        setCost(1);
    }

    return (
        <div>
            <div style={styles.SearchAreaElement}>
                <TextField id="outlined-basic"
                    type={'text'}
                    defaultValue={typeName}
                    value={typeName}
                    onInput={onNameChange}
                    label="Type name"
                    variant="outlined"
                />
            </div>
            <div style={styles.SearchAreaElement}>
                <TextField id="outlined-basic"
                    type={'number'}
                    defaultValue={seatsCount}
                    value={seatsCount}
                    onInput={onSeatsChange}
                    label="Seats count"
                    variant="outlined"
                    min={1}
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

export default RoomTypeCreation;