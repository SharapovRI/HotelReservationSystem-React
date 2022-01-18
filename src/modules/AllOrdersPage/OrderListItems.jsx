import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ModalEditOrder from './ModalEditOrder/ModalEditOrder';

const OrderListItems = ({ content }) => {
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        setData(Array.from(content));
    }, [content])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const checkDate = (dateTime) => {
        const date = new Date(dateTime);
        const now = new Date();
        if (date > now)
        {
            return 1;
        }
        return 0;
    }

    const listItems = data.map((content, index) =>
        <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} style={{margin: '10px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '90%', flexShrink: 0 }}>
                    {content && `Time: ${content.checkInTime} - ${content.checkOutTime}`}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Cost:
                    {content && content.cost}
                    {content && checkDate(content?.checkInTime) === 1 && <button onClick={() => handleOpen()}>Edit</button>}
                    <ModalEditOrder open={open} handleClose={handleClose} content={content} />
                </Typography>
            </AccordionDetails>
        </Accordion>
    );

    return (
        <>
            <ul>{listItems}</ul>
        </>
    );
}

export default OrderListItems;