import './OrdersList.scss';
import { useSelector } from 'react-redux';
import { getId } from '../../../../services/TokenService/getId';
import { useEffect, useState } from 'react';
import getUserOrders from '../../../../api/apiRequests/getUserOrders';
import Pagination from '@mui/material/Pagination';
import OrderListItem from '../OrderListItem/OrderListItem/OrderListItem';

const OrdersList = ({ filter }) => {
    const token = useSelector((state) => state.jwtReducer?.token);
    const userId = getId(token);

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        async function fetchOrders() {
            if (filter) {
                filter['userId'] = Number(userId);
                const data = await getUserOrders({ ...filter, index: page - 1 });
                console.log(data);
                setContent(data.result);
                setPageCount(data.pageCount);
            }
        }

        fetchOrders();
    }, [page, filter]);

    function getOrderList() {
        const list = [];
        if (content?.length > 0) {
            content.map((item, index) =>
                list.push(
                    <OrderListItem orderGroup={item} />
                )
            );
        }

        return list;
    }

    return (
        <>
            {content?.length > 0 &&
                <div className="order_list">
                    {getOrderList()}
                    <Pagination count={pageCount} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
                </div>
                ||
                <h5>No orders</h5>
            }
        </>
    )
}

export default OrdersList;