import './PhotosCarousel.scss';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const PhotosCarousel = ({ photos }) => {

    const listItems = () => {
        const list = [];
        // if (photos?.length > 0) {
        //     photos.map((item, index) =>
        //         list.push(
        //             <li key={index} className='hotelCarouselPhoto'>
        //                     <img src={`data:${item?.extension};base64,${item?.data}`} />
        //             </li>
        //         )
        //     );
        // }
        if (photos?.length > 0) {
            photos.map((item) => (
                list.push(
                    <ImageListItem key={item.img}>
                        <img
                            src={`data:${item?.extension};base64,${item?.data}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                )
            ))
        }

        return list;
    }

    return (
        <>
            <ImageList variant="masonry" className='photo_carousel' cols={1}>
                {listItems()}
            </ImageList>
        </>
    )
}

export default PhotosCarousel;