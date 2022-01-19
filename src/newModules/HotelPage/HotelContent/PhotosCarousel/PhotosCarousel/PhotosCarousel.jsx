import './PhotosCarousel.scss';

const PhotosCarousel = ( { photos } ) => {

    const listItems = () => {
        const list = [];
        if (photos?.length > 0) {
            photos.map((item, index) =>
                list.push(
                    <li key={index} className='hotelCarouselPhoto'>
                            <img src={`data:${item?.extension};base64,${item?.data}`} />
                    </li>
                )
            );
        }

        return list;
    }

    return(
        <>
        <ul className='carouselList'>
            {listItems()}
        </ul>
        </>
    )
}

export default PhotosCarousel;