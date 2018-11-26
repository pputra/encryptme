import firebase from '../config/config';

let {db} = firebase;

export default (id) => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_FORM'
        });

        dispatch({
            type: 'CRUD_LOADING'
        });

        let docRef = db.collection("passwords").doc(id);
        
        docRef.delete().then( ()=> {
            dispatch({
                type: 'DELETE_DATA_SUCCESS'
            });
        }).catch( ()=> {
            dispatch({
                type: 'CRUD_ERROR'
            });
        });

    }
    
}
