import firebase from '../config/config';

let {db} = firebase;

export default (input) => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_FORM'
        });

        dispatch({
            type: 'CRUD_LOADING'
        });

        let docRef = db.collection("passwords").doc(input.dataId);
        
       
        docRef.update({
            url: input.url,
            username: input.username,
            password: input.password,
            updatedAt: new Date().toString(),
        })
        .then( () => {
            dispatch({
                type: 'UPDATE_DATA_SUCCESS'
            });
        })
        .catch(function (error) {
            
            dispatch({
                type: 'CRUD_ERROR'
            });
           
        });


        
        
        
          
    }
    
}
