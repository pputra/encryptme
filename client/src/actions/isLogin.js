import firebase from '../config/config';

let {db, auth} = firebase;

export default (history) => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_DATA_LOADING'
        });

        auth.onAuthStateChanged((user) => {
            if (user) {
              // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: email
                });

                
                let docRef = db.collection("passwords").where('userId', '==', email);

                docRef.onSnapshot((doc) => {
                    let dataFromDB = [];
                    doc.forEach((currentItem) => {
                        let newData = currentItem.data();
                        newData.id = currentItem.id;
                        dataFromDB.push(newData);
                    })

                    if (dataFromDB.length === 0) {
                        dispatch({
                            type: 'FETCH_DATA_ERROR'
                        });
                    } else {
                        dispatch({
                            type:'FETCH_DATA_SUCCESS',
                            payload: dataFromDB
                        });
                    }
                })

            } else {
                
                history.push('/login');
              
            }
        });




    }
    
}
