const checkFacilityData = (values) => {
    const errors = {};

    if (!values.facilityName) {
        errors.facilityName = 'This field can\'t be empty'
    }
    else if (values.facilityName?.length < 3) {
        errors.facilityName = "Facility name must be longer than two letters"
    }

    if (!values.cost) {
        errors.cost = 'This field can\'t be empty'
    }
    else if (values.cost < 0) {
        errors.cost = 'Cost can\'t be less than 0'
    }

    return errors;
}

export default checkFacilityData;