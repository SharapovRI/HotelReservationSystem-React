import DataDetails from '../DataDetails/DataDetails/DataDetails';
import SelectedRooms from '../SelectedRooms/SelectedRooms/SelectedRooms';
import './OrderDetails.scss';

const OrderDetails = () => {
    return(
        <div className='order_details'>
            <div className='details_header'>
                <h2>Details of your booking:</h2>
            </div>
            <DataDetails />
            <hr />
            <SelectedRooms />
        </div>
    )
}

export default OrderDetails;