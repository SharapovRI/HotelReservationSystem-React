const getRole = (token) => {
    try {
        return JSON.parse(atob(token.split('.')[1])).Role;
    } catch {
        return null;
    }
};

export {getRole}