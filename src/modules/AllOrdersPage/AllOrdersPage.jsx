import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import OrderFilterArea from "./OrderFilterArea";

import { styles } from '../HomePage/styles/styles'

const AllOrdersPage = () => {
    const [filter, setFilter] = useState();
    const [pageCount, setPageCount] = useState(0);

    return (
        <div className='allOrdersPage' style={styles.AllOrdersPage}>
            <div className='allOrderPageHeader' style={styles.AllOrderPageHeader}>
                <h2>My orders</h2>
            </div>
            <div className='allOrderPageBody'>
                <OrderFilterArea setFilter={setFilter} />
                <OrderList filter={filter} pageCount={pageCount} setPageCount={setPageCount} />
            </div>
        </div>
    )
}

export default AllOrdersPage;