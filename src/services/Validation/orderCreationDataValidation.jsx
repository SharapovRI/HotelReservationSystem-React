const checkOrderCreationData = (values) => {
    const errors = {};
    if (values.rooms < 0) {
        errors.rooms = 'Rooms can\'t be less than 0'
    }

    return errors;
}

export default checkOrderCreationData;