import { useEffect, useState } from "react";
import { styles } from "../../HomePage/styles/styles";
import PhotoList from "../../Shared/PhotoList/PhotoList";

const HotelPhotoUpdating = ( {hotel, setHotelPhotos} ) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        {hotel?.photos && setPhotos(hotel.photos)}
    }, [hotel]);

    useEffect(() => {
        setHotelPhotos(photos);
    },[photos])

    return(
        <div className='photoArea' style={styles.AdminHotelCreationPhotoArea}>
            <PhotoList photos={photos} setPhotos={setPhotos} />
        </div>
    )
}

export default HotelPhotoUpdating;