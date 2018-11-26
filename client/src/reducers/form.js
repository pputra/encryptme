let defaultState = {
    dataId: '',
    url: '',
    username: '',
    password: '',
    email: '',
    keyword: '',
};

const formReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM':
            return {
                ...state,
                [action.target]: action.payload,
            }
        case 'RESET_FORM': {
            return defaultState;
        }
        default:
            return state;
    }
}

export default formReducer;