let defaultState = {
    alert: false,
    alertMessage: '',
    loading: false,
};

const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CRUD_LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'CRUD_ERROR':
            return {
                ...state,
                loading: false,
                alert: true,
            }
        case 'CREATE_DATA_SUCCESS':
            return {
                ...state,
                alertMessage: 'your password has been stored',
                alert: true,
                loading: false
            }
        case 'DELETE_DATA_SUCCESS':
            return {
                ...state,
                alertMessage: 'your password has been deleted',
                alert: true,
                loading: false
            }
        case 'UPDATE_DATA_SUCCESS':
            return {
                ...state,
                alertMessage: 'your password has been updated',
                alert: true,
                loading: false
            }
        default:
            return state;
    }
}

export default dataReducer;