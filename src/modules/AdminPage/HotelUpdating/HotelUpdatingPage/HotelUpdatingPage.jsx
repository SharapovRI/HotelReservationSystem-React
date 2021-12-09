import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageBodyHotel from '../PageBodyHotel/PageBodyHotel';
import PageBodyFacilities from '../PageBodyFacilities/PageBodyFacilities';
import PageHeader from '../PageHeader/PageHeader'
import './HotelUpdatingPage.scss';
import getHotelFacilities from '../../../../api/apiRequests/getHotelFacilities';
import getHotels from '../../../../api/apiRequests/getHotels';
import putHotel from '../../../../api/apiRequests/putHotel';

const HotelUpdatingPage = () => {
    const { hotelId } = useParams();
    const [hotel, setHotel] = useState();

    const [headerText, setHeaderText] = useState('');
    const [step, setStep] = useState(1);
    const [hotelData, setHotelData] = useState(null);
    const [hotelPhotos, setHotelPhotos] = useState([]);
    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        switch (step) {
            case 1:
                {
                    setHeaderText("HotelUpdating: Hotel Info")
                    break
                };
            case 2:
                {
                    setHeaderText("HotelUpdating: Facilities")
                    break
                };
            case 3:
                {
                    putHotel(hotelId, hotelData, hotelPhotos, facilities);
                    setStep(2);
                    break
                };
        }
    }, [step])

    useEffect(() => {
        async function getData() {
            const payload = {
                id: hotelId,
                size: -1,
                index: 0,
            };

            const data = await getHotels({ ...payload });

            setHotel(data?.result[0]);
        }
        getData();
    }, [hotelId])

    useEffect(() => {
        { hotel && setHotelPhotos(hotel.photos) }
    }, [hotel])

    useEffect(() => {
        async function fetchFacilities() {

            const data = await getHotelFacilities(hotelId, {
                index: 0,
                size: 200
            });

            setFacilities(data);
        }

        fetchFacilities();

    }, [hotelId])

    return (
        <div class='wrapper'>
            <div className='first' />
            <div className='page'>
                <div className='pageHeader'>
                    <PageHeader headerText={headerText} />
                </div>
                {step === 1 && <PageBodyHotel setHotelData={setHotelData} hotel={hotel} hotelPhotos={hotelPhotos} setHotelPhotos={setHotelPhotos} step={step} setStep={setStep} />}
                {step === 2 && <PageBodyFacilities facilities={facilities} setFacilities={setFacilities} step={step} setStep={setStep} />}
            </div>
            <div className='first' />
        </div>
    )
}

export default HotelUpdatingPage;