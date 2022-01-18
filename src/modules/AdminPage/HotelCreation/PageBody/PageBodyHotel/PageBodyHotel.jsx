import './PageBodyHotel.scss';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import HotelInfoArea from './HotelInfoArea/HotelInfoArea';
import HotelPhotoArea from './HotelPhotosArea/HotelPhotoArea';

const PageBodyHotel = ({ setHotelData, hotelPhotos, setHotelPhotos, step, setStep }) => {
    const navigate = useNavigate();
    return (
        <Box className='header' sx={
            {
                width: 'auto',
                height: '90%',
                border: '1px solid grey',
                borderRadius: '20px',
                borderWidth: '5px',
                padding: '15px',
                margin: '15px',
            }}>
            <div className='pageBody'>
                <HotelInfoArea setHotelData={setHotelData} />
                <HotelPhotoArea hotelPhotos={hotelPhotos} setHotelPhotos={setHotelPhotos} />
                <div className='hotelCreationButtons'>
                    <div className='cancelButtonDiv'>
                        <button onClick={() => navigate('/Admin')}>Cancel</button>
                    </div>
                    <div className='nextButtonDiv'>
                        <button onClick={() => setStep(step + 1)}>Next step</button>
                    </div>
                </div>
            </div>
        </Box >
    )
}

export default PageBodyHotel;