import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import getHotels from '../../api/apiRequests/getHotels';
import { DialogContentText } from '@mui/material';

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
    <li key={content.id}>
      <h3>{content.name}</h3>
      <p>{content.city}, {content.country}, {content.address}</p>
      </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}