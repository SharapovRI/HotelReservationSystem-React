import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotelRooms from '../../../api/apiRequests/getHotelRooms';

const RoomList = ({ rooms, pageCount, filter, hotelId, setRooms}) => {
    const [page, setPage] = React.useState(1);

    React.useEffect(async () => {
      if (filter) {
        const data = await getHotelRooms(hotelId, { ...filter, index: page - 1 });
        setRooms(data.result);
      }
    }, [page])

    const handleChange = (event, value) => {
        setPage(value);
      };

    return(
        <Stack spacing={2}>
            <NumberList content={rooms} />
            <Pagination count={pageCount} page={page} onChange={handleChange} />
        </Stack>
    )
}

export default RoomList;

function NumberList(props) {
    const content = props.content;
    const listItems = content.map((content) =>
      
        <li key={content.id}>        
            <h3>{content.type}</h3>
            <p>Seats count: {content.seatsCount}, Cost: {content.cost}</p>
        </li>
      
    );
    return (
      <ul>{listItems}</ul>
    );
  }