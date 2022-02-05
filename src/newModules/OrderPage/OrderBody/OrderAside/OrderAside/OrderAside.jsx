import './OrderAside.scss';

import OrderDetails from '../OrderDetails/OrderDetails/OrderDetails';
import OrderCost from '../OrderCost/OrderCost/OrderCost';

const OrderAside = () => {
    return(
        <aside className='aside body_container_item'>
            <OrderDetails />
            <OrderCost />
        </aside>
    )
}

export default OrderAside;