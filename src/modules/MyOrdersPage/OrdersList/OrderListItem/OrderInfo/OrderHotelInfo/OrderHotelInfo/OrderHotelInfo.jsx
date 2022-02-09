import './OrderHotelInfo.scss';

const OrderHotelInfo = ({ hotel }) => {
    return (
        <div className="oli_hotel_info oli_info_item">
            <div className="oli_hi_photo">
                <img className='hotel_photo' src={`data:${hotel?.photos[0]?.extension};base64,${hotel?.photos[0]?.data}`} />
            </div>
            <div className="oli_hi_address_container">
                <div className="oli_hi_address oli_hi_ac">
                    <h3>
                        {hotel?.address}, {hotel?.city}, {hotel?.country}
                    </h3>
                </div>
                <div className="oli_hi_map oli_hi_ac">
                    map
                </div>
            </div>
        </div>
    )
}

export default OrderHotelInfo;