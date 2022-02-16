const checkHotelCreationHotelInfoData = (values) => {
    const errors = {};
    if (!values.city) {
        errors.city = 'You should select city';
    }

    if (!values.hotelName) {
        errors.hotelName = 'This field can\'t be empty'
    }
    else if (values.hotelName?.length < 3) {
        errors.hotelName = 'The name of the hotel must be longer than two letters'
    }
    else if (values.hotelName?.length > 50) {
        errors.hotelName = 'The name of the hotel can\'t be longer than 50 letters'
    }

    if (!values.address) {
        errors.address = 'This field can\'t be empty'
    }
    else if (values.address?.length < 6) {
        errors.address = 'The name of the hotel must be longer than five letters'
    }

    return errors;
}

export default checkHotelCreationHotelInfoData;