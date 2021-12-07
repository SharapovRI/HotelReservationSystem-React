import { useEffect, useState } from "react";
import getUserOrders from "../../api/apiRequests/getUserOrders";
import OrderListItems from "./OrderListItems";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { styles } from "../HomePage/styles/styles";

const OrderList = ({filter, pageCount, setPageCount}) => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        async function fetchOrders() {
            if (filter) {
                const data = await getUserOrders({ ...filter, index: page - 1 });
                setContent(data.result);
                setPageCount(data.pageCount);
            }
        }

        fetchOrders();
    }, [page, filter])

    return (
        <div style={styles.OrderList}>
            <Stack spacing={2}>
                {content?.length > 0 && <OrderListItems content={content} />}
                <Pagination count={pageCount} page={page} onChange={handleChange} />
            </Stack>
        </div>
    );
}

export default OrderList;