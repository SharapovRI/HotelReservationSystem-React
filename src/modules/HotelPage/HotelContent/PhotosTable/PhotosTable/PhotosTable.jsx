import './PhotosTable.scss';

const PhotosTable = ( { photos } ) => {
    const listItems = () => {
        const list = [];
        if (photos?.length > 2) {
            photos.map((item, index) =>
                list.push(
                    <div key={index} className='hotelPhoto'>
                            <img src={`data:${item?.extension};base64,${item?.data}`} />
                    </div>
                )
            );
        }
        else {
            photos.map((item, index) =>
                list.push(
                    <div key={index} className='hotel_photo_1'>
                            <img src={`data:${item?.extension};base64,${item?.data}`} />
                    </div>
                )
            );
        }

        return list;
    }

    return(
        <>
            <div className='hotelPhotosList'>
                {photos && listItems()}
            </div>
        </>
    )
}

export default PhotosTable;