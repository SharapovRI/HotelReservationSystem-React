import './PhotosTable.scss';

const PhotosTable = ( { photos } ) => {
    const listItems = () => {
        const list = [];
        if (photos?.length > 0) {
            photos.map((item, index) =>
                list.push(
                    <div key={index} className='hotelPhoto'>
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
                {listItems()}
            </div>
        </>
    )
}

export default PhotosTable;