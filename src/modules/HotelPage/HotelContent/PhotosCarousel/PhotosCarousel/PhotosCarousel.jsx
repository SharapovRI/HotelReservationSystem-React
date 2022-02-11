import './PhotosCarousel.scss';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PhotoCarouselItem from '../PhotoCarouselItem/PhotoCarouselItem/PhotoCarouselItem';

const PhotosCarousel = ({ photos }) => {

    const listItems = () => {
        const list = [];
        if (photos?.length > 0) {
            photos.map((item) => (
                list.push(
                    <PhotoCarouselItem item={item} />
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