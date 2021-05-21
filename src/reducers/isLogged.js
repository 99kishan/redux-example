const loggedReducer = (state = false, action) => {
    switch (action.type){
        case 'INCREMENT':
            return true;
        case 'DECREMENT':
            return false;
        default:
            return state;
    }
};

export default loggedReducer;