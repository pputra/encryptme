import firebase from '../config/config';

let {db, auth} = firebase;

export default () => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_FORM'
        })
        auth.signOut().then((result) => {
            dispatch({
                type: 'LOGOUT'
            });
            
        }).catch((err) => {
            console.log(err);
        });
 
    }
    
}
