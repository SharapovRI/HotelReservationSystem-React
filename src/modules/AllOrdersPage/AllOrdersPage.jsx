import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import OrderFilterArea from "./OrderFilterArea";

import './AllOrdersPage.scss';

const AllOrdersPage = () => {
    const [filter, setFilter] = useState();
    const [pageCount, setPageCount] = useState(0);

    return (
        <>
            <div className='allOrderPageHeader'>
                <h2>My orders</h2>
            </div>
            <div className='allOrderPageBody'>
                <OrderFilterArea setFilter={setFilter} />
                <OrderList filter={filter} pageCount={pageCount} setPageCount={setPageCount} />
            </div>
        </>
    )
}

export default AllOrdersPage;