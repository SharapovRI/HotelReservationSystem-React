import './OrderTotalCost.scss';

const OrderTotalCost = ({ orderGroup }) => {

    const numberOfDays = getNumberOfDays();

    function getPrice() {
        const rooms = orderGroup?.orders;
        let price = 0;

        if (rooms.length > 0) {
            rooms.map((item, index) =>
                price += item.cost
            );
        }
        console.log(rooms);
        const totalPrice = price * numberOfDays;

        return totalPrice;
    }

    function getNumberOfDays() {
        const order = orderGroup?.orders[0];

        let date1 = new Date(order.checkInTime);
        date1.setHours(12);
        const date2 = new Date(order.checkOutTime);
    
        const oneDay = 1000 * 60 * 60 * 24;
    
        const diffInTime = date2.getTime() - date1.getTime();
    
        const diffInDays = Math.round(diffInTime / oneDay);
    
        return diffInDays;
    }

    return (
        <>
        <hr />
        <div className="oli_total_cost">
            <div className="oli_tc_header">
                <p>Cost:</p>
                <p className='oli_tc_nights_count'>
                    {numberOfDays} nights, {orderGroup?.orders?.length} rooms
                </p>
            </div>
            <div className="oli_tc_body">
                <p>${getPrice()}</p>
            </div>
        </div>
        </>
    )
}

export default OrderTotalCost;