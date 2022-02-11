import './ReservationColumn.scss';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const ReservationColumn = ({ errors }) => {
    return (
        <>
            <div className='roomTableHead' />
            <Tooltip open={true} title={errors.rooms}>
                <div className="room_table_body">
                    <Button variant="contained" type="submit" form='order_form' className='blue_button'>Do order</Button>
                </div>
            </Tooltip>
        </>
    )
}

export default ReservationColumn;