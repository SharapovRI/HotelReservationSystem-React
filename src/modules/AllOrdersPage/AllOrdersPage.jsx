import React, { useState, useEffect } from "react";
import { getId } from "../../services/TokenService/getId";
import FilterArea from "./FilterArea";
import { useSelector } from "react-redux";
import OrderList from "./OrderList";

const AllOrdersPage = () => {    
    const [filter, setFilter] = useState();
    const [pageCount, setPageCount] = useState(0);

    return (
        <>
            <FilterArea setFilter={setFilter} />
            <OrderList filter={filter} pageCount={pageCount} setPageCount={setPageCount}/>
        </>
    )
}

export default AllOrdersPage;