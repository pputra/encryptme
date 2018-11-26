export default (target, value) => {
    return (dispatch) => {
        
        if (target && value) {
            dispatch({
                type: 'UPDATE_FORM',
                target: target,
                payload: value
            });
        } else {
            dispatch({
                type: 'RESET_FORM'
            })
        }

    };
    
};
