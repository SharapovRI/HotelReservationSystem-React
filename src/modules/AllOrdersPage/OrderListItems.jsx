import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const OrderListItems = ({ content }) => {
    const [expanded, setExpanded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Array.from(content));
    }, [content])

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const listItems = data.map((content) =>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Cost:
                    {content && content.cost}
                    Time:
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Hotel:
                </Typography>
            </AccordionDetails>
        </Accordion>
    );

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}

export default OrderListItems;