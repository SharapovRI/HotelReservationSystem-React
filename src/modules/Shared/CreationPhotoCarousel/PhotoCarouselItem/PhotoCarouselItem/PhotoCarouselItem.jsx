import './PhotoCarouselItem.scss';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';
import BigModalPhoto from '../../../../Shared/BigModalPhoto/BigModalPhoto/BigModalPhoto';

const PhotoCarouselItem = ({item, deletePhoto}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <ImageListItem key={item.img} className='creationPhoto' onClick={handleOpen}>
            <img
                src={`data:${item?.extension};base64,${item?.data}`}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
        <BigModalPhoto photo={item} open={open} handleClose={handleClose} deletePhoto={deletePhoto}/>
        </>
    )
}

export default PhotoCarouselItem;