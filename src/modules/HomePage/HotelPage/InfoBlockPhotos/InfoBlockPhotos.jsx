import { useEffect, useState } from 'react';
import './InfoBlockPhotos.scss';

const InfoBlockPhotos = ({photos}) => {
    const [indicatorList, setIndicatorList] = useState([]);
    const [carouselItemList, setCarouselItemList] = useState([]);

    useEffect(() => {

        const hotelPhotos = Array.from(photos);
        let indicatorList1 = [];
        let carouselItemList1 = [];
        indicatorList1 = hotelPhotos?.map((item, index) => {
            <li data-target="#carouselExampleIndicators" data-slide-to={index} />
        })

        carouselItemList1 = hotelPhotos?.map((item, index) => {
            <div class="carousel-item active">
                    <img class="d-block w-100" src={`data:${item.extension};base64,${item.data}`} />
            </div>
        })
        
        setIndicatorList(indicatorList1)
        setCarouselItemList(carouselItemList);
    }, [photos])

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">{indicatorList}</ol>
            <div class="carousel-inner">
                {carouselItemList}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default InfoBlockPhotos;