import firebase from '../config/config';

let {db, auth} = firebase;

export default (email, password, history) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_LOADING'
        });

        

        auth.signInWithEmailAndPassword(email, password).then((result) => {
            dispatch({
                type: 'RESET_FORM'
            });

            dispatch({
                type:'LOGIN_SUCCESS',
                payload: email
            });
            
            history.push('/');
        }).catch((err) => {
            dispatch({
                type: 'RESET_FORM'
            });

            dispatch({
                type: 'LOGIN_FAILED'
            });
        });
        
        
          
    }
    
}
