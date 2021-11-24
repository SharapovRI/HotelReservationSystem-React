const getId = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1])).Name;
    } catch {
        return null;
    }
};

export {getId}