import firebase from '../config/config';

let {db, auth} = firebase;

export default (input) => {
    return (dispatch) => {
        dispatch({
            type: 'RESET_FORM'
        })


        let docRef = db.collection("passwords")
        
        dispatch({
            type: 'CRUD_LOADING'
        });
       
        docRef.add({
            userId: input.currUser,
            url: input.url,
            username: input.username,
            password: input.password,
            createdAt: new Date().toString(),
            updatedAt: new Date().toString(),  
        })
        .then((docRef) => {
             dispatch({
                 type: 'CREATE_DATA_SUCCESS'
             });
        })
        .catch((error) => {
            dispatch({
                type: 'CRUD_ERROR'
            });
        }); 

        
        
        
          
    }
    
}
