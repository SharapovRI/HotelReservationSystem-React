import './CreationPhotoCarousel.scss';
import AddPhotoItem from '../AddPhotoItem/AddPhotoItem/AddPhotoItem';

const CreationPhotoCarousel = ({ photos, setPhotos, withoutAddBtn = false}) => {

    const listItems = () => {
        const list = [];
        if (photos?.length > 0) {
            photos.map((item, index) =>
                list.unshift(
                    <li key={index} className='creationPhoto'>
                        <img src={`data:${item?.extension};base64,${item?.data}`} />
                    </li>
                )
            );
        }

        if (withoutAddBtn === false) {
            list.unshift(
                <li className='creationPhoto inputLi'>
                    <AddPhotoItem photos={photos} setPhotos={setPhotos} />
                </li>
            )
        }

        return list;
    }

    return (
        <>
            <ul className='creationPhotoCarousel'>
                {listItems()}
            </ul>
        </>
    )
}

export default CreationPhotoCarousel;