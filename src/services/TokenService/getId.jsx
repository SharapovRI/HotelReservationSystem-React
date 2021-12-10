const getId = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1])).Id;
    } catch {
        return null;
    }
};

export {getId}