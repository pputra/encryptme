import firebase from '../config/config';

let {db, auth} = firebase;


export default function(email, password, history) {
   
    return function(dispatch) {
        dispatch({
            type: 'REGISTER_LOADING'
        });

       
        auth.createUserWithEmailAndPassword(email, password).then((result) => {
            
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: email
            });

            dispatch({
                type: 'RESET_FORM'
            })

            history.push('/');


        }).catch((err) => {
            dispatch({
                type: 'RESET_FORM'
            });
            
            dispatch({
                type: 'REGISTER_FAILED',
                payload: err
            });
        });
          

    }
}