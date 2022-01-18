import { useEffect, useState } from 'react';
import './InfoBlockPhotos.scss';

const InfoBlockPhotos = ({ photos }) => {
    const [carouselItemList, setCarouselItemList] = useState([]);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let carouselItemList1 = [];
        let counterok = counter;

        photos?.map((item, index) => {
            if (counterok === 0) {
                carouselItemList1.push(
                    <div class="carousel-item active" key={index} style={{maxHeight: '10%'}}>
                        <img src={`data:${item.extension};base64,${item.data}`} style={{height: '40%', width: '40%'}}/>
                    </div>)
            }
            else {
                carouselItemList1.push(
                    <div class="carousel-item" key={index} style={{maxHeight: '30%'}}>
                        <img class="d-block" src={`data:${item.extension};base64,${item.data}`} />
                    </div>)
            }
            {counterok++}
        })

        setCarouselItemList(carouselItemList1);
        setCounter(0);
    }, [photos])

    return (
        <div class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                {carouselItemList}
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default InfoBlockPhotos;