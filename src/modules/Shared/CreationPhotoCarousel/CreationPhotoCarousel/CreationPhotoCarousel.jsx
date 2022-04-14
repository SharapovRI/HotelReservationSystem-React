import './CreationPhotoCarousel.scss';
import AddPhotoItem from '../AddPhotoItem/AddPhotoItem/AddPhotoItem';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import PhotoCarouselItem from '../PhotoCarouselItem/PhotoCarouselItem/PhotoCarouselItem';

const CreationPhotoCarousel = ({ photos, setPhotos, withoutAddBtn = false }) => {

    const listItems = () => {
        const list = [];

        if (photos?.length > 0) {
            photos.map((item, index) =>
                list.push(
                    <PhotoCarouselItem item={item} deletePhoto={() => deletePhoto(index)}/>
                )
            );
        }

        return list;
    }

    function deletePhoto(index) {
        let newList = [];
        Object.assign(newList, photos);
        newList.splice(index, 1)
        setPhotos(newList)
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