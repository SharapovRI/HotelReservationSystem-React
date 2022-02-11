const checkRoomOrderingData = (values) => {
    const errors = {};
    
    if (values.rooms?.length < 1) {
        errors.rooms = 'You should select at least 1 room'
    }

    return errors;
}

export default checkRoomOrderingData;