import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotels from '../../api/apiRequests/getHotels';
import { NavLink } from 'react-router-dom';

const ContentBlock = ({ pageCount, content, filter, setContent }) => {
  const [page, setPage] = React.useState(1);

  React.useEffect(async () => {
    if (filter) {
      const data = await getHotels({ ...filter, index: page - 1 });
      setContent(data.result);
    }
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <NumberList content={content} />
      <Pagination count={pageCount} page={page} onChange={handleChange} />
    </Stack>
  );
}

export default ContentBlock;

function NumberList(props) {
  const content = props.content;
  const listItems = content.map((content) =>
    <NavLink to={`/Hotels/${content.id}`}>
      <li key={content.id}>        
          <h3>{content.name}</h3>
          <p>{content.city}, {content.country}, {content.address}</p>
      </li>
    </NavLink>
  );
  return (
    <ul>{listItems}</ul>
  );
}