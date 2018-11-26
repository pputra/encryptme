let defaultState = {
    data: [],
    loading: false,
    error: false,
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: false
            }
        case 'FETCH_DATA_LOADING' :
            return {
                ...state,
                loading: true
            }
        case 'FETCH_DATA_ERROR' :
            return {
                error: true,
                loading: false
            }
        default:
            return state;
    }
}

export default dataReducer;