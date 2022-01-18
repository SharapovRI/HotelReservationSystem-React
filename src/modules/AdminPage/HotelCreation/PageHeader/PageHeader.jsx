import './PageHeader';
import Box from '@mui/material/Box';

const PageHeader = ({headerText}) => {

    return (
        <Box className='header' sx={
            {
                width: 'auto',
                height: 'auto',
                border: '1px solid grey',
                borderRadius: '20px',
                borderWidth: '5px', 
                padding: '15px',
                margin: '15px',
            }}>
            <h2>{headerText}</h2>
        </Box>
    )
}

export default PageHeader;