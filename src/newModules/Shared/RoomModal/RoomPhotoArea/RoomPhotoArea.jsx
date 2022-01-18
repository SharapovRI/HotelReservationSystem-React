import './RoomPhotoArea.scss';
import PhotoList from '../../PhotoList/PhotoList'

const RoomPhotoArea = ({ roomPhotos, setRoomPhotos }) => {
    return (
        <div className='roomPhotos'>
            <PhotoList photos={roomPhotos} setPhotos={setRoomPhotos} />
        </div>
    )
}

export default RoomPhotoArea;