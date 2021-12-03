import { useEffect, useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TextField from '@mui/material/TextField';
import PhotoList from "../../../Shared/PhotoList/PhotoList";

const AccordionItem = ({ content, index, createdRooms, setCreatedRooms, removeRoomType }) => {
    const [expanded, setExpanded] = useState(false);

    const [typeName, setTypeName] = useState('');
    const [seatsCount, setSeatsCount] = useState(1);
    const [cost, setCost] = useState(1);
    const [photos, setPhotos] = useState([]);
    const [roomCount, setRoomCount] = useState(1);

    useEffect(() => {
        setTypeName(content?.typeName);
        setSeatsCount(content?.seatsCount);
        setCost(content?.cost);
    }, [content])

    useEffect(() => {
        createdRooms[index] = {
            typeName: typeName,
            seatsCount: Number(seatsCount),
            cost: Number(cost),
            roomPhotos: photos,
            roomCount: Number(roomCount),
        }
    }, [typeName, seatsCount, cost, roomCount, photos])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onCountChange = (event) => {
        const value = event.target.value;
        if (event.target.value < 1) {
            setRoomCount(1);
        }
            setRoomCount(value);   
    }

    return (
        <Accordion expanded={expanded === `panel1${index}`} onChange={handleChange(`panel1${index}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div>
                    <div>
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {typeName}
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {seatsCount} seats
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {cost} $
                        </Typography>
                    </div>
                </div>
                <div>
                    Count:
                    <TextField id="outlined-basic"
                        type={'text'}
                        defaultValue={roomCount}
                        value={roomCount}
                        onInput={onCountChange}
                        label=""
                        variant="outlined"
                    />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <PhotoList photos={photos} setPhotos={setPhotos} />
                </div>
                <div>
                    <button onClick={() => removeRoomType(index)}>Delete</button>
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionItem;