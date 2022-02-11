const checkHomePageSearchingData = (values) => {
    const errors = {};
    if (!values.city) {
        errors.city = 'You should select city';
    }

    if (!values.seats) {
        errors.seats = 'You should select amount of seats'
    }
    else if (values.seats < 1) {
        errors.seats = 'Amount of seats can\'t be less than 1'
    }

    return errors;
}

export default checkHomePageSearchingData;