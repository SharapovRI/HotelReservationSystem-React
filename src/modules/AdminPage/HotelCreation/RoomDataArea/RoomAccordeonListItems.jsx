const RoomAccordeonListItems = (content) => {
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
                <div>
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    Type:
                    {content && content.name}
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

export default RoomAccordeonListItems;