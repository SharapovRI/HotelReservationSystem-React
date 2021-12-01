import { useState } from "react";
import TextField from '@mui/material/TextField';

const RoomTypeCreation = ( {rooms, setRooms} ) => {
    const [typeName, setTypeName] = useState('');
    const [seatsCount, setSeatsCount] = useState(1);
    const [cost, setCost] = useState(1);

    const onNameChange = (event) =>{
        setTypeName(event.target.value);
    }

    const onSeatsChange = (event) =>{
        setSeatsCount(event.target.value);
    }

    const onCostChange = (event) =>{
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

    return(
        <div>
            <TextField id="outlined-basic"
                type={'text'}
                defaultValue={typeName}
                value={typeName}
                onInput={onNameChange}
                label="Type name"
                variant="outlined"
            />
            <TextField id="outlined-basic"
                type={'number'} 
                defaultValue={seatsCount} 
                value={seatsCount} 
                onInput={onSeatsChange} 
                label="Seats count" 
                variant="outlined" 
                min={1}
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

export default RoomTypeCreation;