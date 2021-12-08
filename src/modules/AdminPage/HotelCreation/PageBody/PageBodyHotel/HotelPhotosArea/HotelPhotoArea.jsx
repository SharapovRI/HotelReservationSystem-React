import PhotoList from '../../../../../Shared/PhotoList/PhotoList';
import './HotelPhotoArea.scss';

const HotelPhotoArea = ({ hotelPhotos, setHotelPhotos }) => {
    return (
        <div className='hotelPhotos'>
            <PhotoList photos={hotelPhotos} setPhotos={setHotelPhotos} />
        </div>
    )
}

export default HotelPhotoArea;