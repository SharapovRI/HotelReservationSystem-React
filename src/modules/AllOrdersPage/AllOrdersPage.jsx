import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import OrderFilterArea from "./OrderFilterArea";

const AllOrdersPage = () => {    
    const [filter, setFilter] = useState();
    const [pageCount, setPageCount] = useState(0);

    return (
        <>
            <OrderFilterArea setFilter={setFilter} />
            <OrderList filter={filter} pageCount={pageCount} setPageCount={setPageCount}/>
        </>
    )
}

export default AllOrdersPage;