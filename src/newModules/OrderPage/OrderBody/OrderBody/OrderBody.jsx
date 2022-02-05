import OrderAside from '../OrderAside/OrderAside/OrderAside';
import OrderMain from '../OrderMain/OrderMain/OrderMain';
import './OrderBody.scss';

const OrderBody = () => {
    return (
        <div className='body_container'>
            <OrderAside />
            <OrderMain />
        </div>
    )
}

export default OrderBody;