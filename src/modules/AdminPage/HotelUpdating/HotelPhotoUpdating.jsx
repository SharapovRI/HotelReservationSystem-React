import { useEffect, useState } from "react";
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
        <div>
            <PhotoList photos={photos} setPhotos={setPhotos} />
        </div>
    )
}

export default HotelPhotoUpdating;