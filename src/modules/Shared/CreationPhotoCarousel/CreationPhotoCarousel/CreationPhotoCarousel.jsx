import './CreationPhotoCarousel.scss';
import AddPhotoItem from '../AddPhotoItem/AddPhotoItem/AddPhotoItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const CreationPhotoCarousel = ({ photos, setPhotos, withoutAddBtn = false }) => {

    const listItems = () => {
        const list = [];

        if (photos?.length > 0) {
            photos.map((item, index) =>
                list.push(
                    <ImageListItem key={item.img} className='creationPhoto'>
                        <img
                            src={`data:${item?.extension};base64,${item?.data}`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                )
            );
        }

        return list;
    }

    return (
        <>
            {photos?.length > 0 &&
                <ImageList variant="masonry" className='creationPhotoCarousel' cols={1}>
                    {listItems()}
                </ImageList>
            }
            {withoutAddBtn === false && <AddPhotoItem photos={photos} setPhotos={setPhotos} />}
        </>
    )
}

export default CreationPhotoCarousel;