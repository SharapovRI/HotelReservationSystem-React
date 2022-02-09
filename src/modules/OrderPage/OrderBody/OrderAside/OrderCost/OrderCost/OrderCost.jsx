import './OrderCost.scss';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const OrderCost = () => {
    const roomSt = useSelector((state) => state.roomReducer?.rooms);
    const [searchParams, setSearchParams] = useSearchParams();

    function getPrice() {
        let price = 0;

        if (roomSt.length > 0) {
            roomSt.map((item, index) =>
                price += item.cost
            );
        }

        console.log(roomSt);
        const totalPrice = price * getNumberOfDays();

        return totalPrice;
    }

    function getNumberOfDays() {
        const date1 = new Date(searchParams.get('checkIn'));
        const date2 = new Date(searchParams.get('checkOut'));
    
        const oneDay = 1000 * 60 * 60 * 24;
    
        const diffInTime = date2.getTime() - date1.getTime();
    
        const diffInDays = Math.round(diffInTime / oneDay);
    
        return diffInDays;
    }

    return(
        <div className="order_cost_container">
            <div className="order_cost">
                <div className="price_name">
                    <h3>Price</h3>
                </div>
                <div className="price_value">
                    <h3>{getPrice()}$</h3>
                </div>
            </div>
        </div>
    )
}

export default OrderCost;