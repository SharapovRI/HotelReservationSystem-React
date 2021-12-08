import { useEffect, useState } from 'react';
import PageBodyFacilities from '../PageBody/PageBodyFacilities/PageBodyFacilities';
import PageBodyHotel from '../PageBody/PageBodyHotel/PageBodyHotel';
import PageBodyRooms from '../PageBody/PageBodyRooms/PageBodyRooms';
import PageHeader from '../PageHeader/PageHeader';
import postHotel from '../../../../api/apiRequests/postHotel'
import './HotelCreationPage.scss';

const HotelCreationPage = () => {
    const [headerText, setHeaderText] = useState('');
    const [step, setStep] = useState(1);
    const [hotelData, setHotelData] = useState(null);
    const [hotelPhotos, setHotelPhotos] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        switch (step) {
            case 1:
                {
                    setHeaderText("HotelCreation: Hotel Info")
                    break
                };
            case 2:
                {
                    setHeaderText("HotelCreation: Rooms")
                    break
                };
            case 3:
                {
                    setHeaderText("HotelCreation: Facilities")
                    break
                };
                case 4:
                    {
                        postHotel(hotelData, hotelPhotos, rooms, facilities);
                        setStep(3);
                    }
        }
    }, [step])

    return (
        <div class='wrapper'>
            <div className='first' />
            <div className='page'>
                <div className='pageHeader'>
                    <PageHeader headerText={headerText} />
                </div>
                    {step === 1 && <PageBodyHotel setHotelData={setHotelData} hotelPhotos={hotelPhotos} setHotelPhotos={setHotelPhotos} step={step} setStep={setStep}/>}
                    {step === 2 && <PageBodyRooms rooms={rooms} setRooms={setRooms} step={step} setStep={setStep}/>}
                    {step === 3 && <PageBodyFacilities facilities={facilities} setFacilities={setFacilities} step={step} setStep={setStep}/>}
            </div>
            <div className='first' />
        </div>
    )
}

export default HotelCreationPage;