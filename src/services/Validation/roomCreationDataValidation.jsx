const checkRoomCreationData = (values) => {
    const errors = {};

    if (!values.typeName) {
        errors.typeName = 'This field can\'t be empty'
    }
    else if (values.typeName?.length < 3) {
        errors.typeName = "Room name must be longer than two letters"
    }

    if (!values.seats) {
        errors.seats = 'You should select amount of seats'
    }
    else if (values.seats < 1) {
        errors.seats = 'Amount of seats can\'t be less than 1'
    }

    if (!values.roomCount) {
        errors.roomCount = 'You should select amount of rooms'
    }
    else if (values.roomCount < 1) {
        errors.roomCount = 'Amount of rooms can\'t be less than 1'
    }
    
    if (!values.cost) {
        errors.cost = 'You should input cost'
    }
    else if (values.cost < 0) {
        errors.cost = 'Cost can\'t be less than 0'
    }

    return errors;
}

export default checkRoomCreationData;