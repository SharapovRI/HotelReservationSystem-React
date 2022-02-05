import './ReservationColumn.scss';
import Button from '@mui/material/Button';

const ReservationColumn = () => {
    return (
        <>
            <div className='roomTableHead' />
            <div className="room_table_body">
                <Button variant="contained" type="submit" form='order_form' className='blue_button'>Do order</Button>
            </div>
        </>
    )
}

export default ReservationColumn;