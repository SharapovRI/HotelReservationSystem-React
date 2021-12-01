import { useEffect, useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhotoList from "./PhotoList";

const RoomAccordeonListItems = ({content}) => {
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Array.from(content));
    }, [content])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const listItems = data.map((content, index) =>
        <Accordion expanded={expanded === `panel1${index}`} onChange={handleChange(`panel1${index}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div>
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Type:
                        {content && content.typeName}
                    </Typography>
                </div>
                <div>
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Seats:
                        {content && content.seatsCount}
                    </Typography>
                </div>
                <div>
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Cost:
                        {content && content.cost}
                    </Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <PhotoList />
                </div>
            </AccordionDetails>
        </Accordion>
    );

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default RoomAccordeonListItems;