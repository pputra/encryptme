let defaultState = {
    loading: false,
    error: false,
    errorMessage: '',
};

const registerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                errorMessage: '',
            }
        case 'REGISTER_LOADING' :
            return {
                ...state,
                loading: true,
                errorMessage: '',
                error: false
            }
        case 'REGISTER_FAILED' :
        
            return {
                ...state,
                error: true,
                errorMessage: String(action.payload),
                loading: false
            }
        default:
            return state;
    }
}

export default registerReducer;