import './SearchingParams.scss';
import Button from '@mui/material/Button';

const SearchingParams = ({ filter }) => {
    return (
        <>
            <div className='paramItem'>
                <div className='dataParam'>
                    <label>Date come:</label>
                    <br />
                    <strong>{filter?.checkIn}</strong>
                </div>
                <div className='dataParam'>
                    <label>Date out:</label>
                    <br />
                    <strong>{filter?.checkOut}</strong>
                </div>
            </div>
            <div className='paramItem'>
                <div>
                    <label>Need seats:</label>
                    <br />
                    <strong>{filter?.freeSeatsCount}</strong>
                </div>
            </div>
            <div className='paramBtn'>
                <Button variant="contained" type="submit" className='paramButton'>Сhange search parameters</Button>
            </div>
        </>
    )
}

export default SearchingParams;