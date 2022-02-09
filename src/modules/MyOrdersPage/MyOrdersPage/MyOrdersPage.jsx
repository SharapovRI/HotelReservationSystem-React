import { useEffect, useState } from 'react';
import OrdersList from '../OrdersList/OrdersList/OrdersList';
import SearchArea from '../SearchArea/SearchArea/SearchArea';
import './MyOrdersPage.scss';

const MyOrdersPage = () => {
    const [filter, setFilter] = useState();

    useEffect(() => {
        console.log(filter);
    }, [filter])

    return(
        <div className="my_orders_page">
            <div className="mop_header">
                <div className="mop_search_area">
                    <SearchArea setFilter={setFilter}/>
                </div>
            </div>
            <div className="mop_main">
                <OrdersList filter={filter}/>
            </div>
        </div>
    )
}

export default MyOrdersPage;