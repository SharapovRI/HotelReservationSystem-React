import HotelInfo from '../HotelInfo/HotelInfo/HotelInfo';
import RoomsInfo from '../RoomsInfo/RoomsInfo/RoomsInfo';
import './OrderMain.scss';

const OrderMain = () => {
    return (
        <main className='main body_container_item'>
            <HotelInfo />
            <RoomsInfo />
        </main>
    )
}

export default OrderMain;