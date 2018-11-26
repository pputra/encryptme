let defaultState = {
    isLogin: false,
    currUser: '',
    loading: false,
    error: false
};

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isLogin: true,
                currUser: action.payload,
                loading: false,
                error: false,
            }
        case 'LOGIN_LOADING' :
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_FAILED' :
            return {
                ...state,
                error: true,
                loading: false
            }
        case 'LOGOUT' :
            return {
                ...state,
                isLogin: false,
                currUser: '',
            }
        default:
            return state;
    }
}

export default loginReducer;