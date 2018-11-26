import firebase from '../config/config';

let {db} = firebase;

export default (key, keyword, currUser) => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_DATA_LOADING'
        });

        let docRef = db.collection("passwords").where('userId', '==', currUser);

                docRef.onSnapshot((doc) => {
                    let dataFromDB = [];
                    doc.forEach((currentItem) => {
                        let newData = currentItem.data();
                        newData.id = currentItem.id;
                        dataFromDB.push(newData);
                    });

                    if (keyword) {
                        let filteredData = dataFromDB.filter((el) => {
                            return el[key].indexOf(keyword) !== -1;
                        })
                        
                        if (filteredData.length === 0) {
                            dispatch({
                                type: 'FETCH_DATA_ERROR'
                            });
                        } else {
                            dispatch({
                                type:'FETCH_DATA_SUCCESS',
                                payload: filteredData,
                            });
                        }
                    } else {
                        dispatch({
                            type:'FETCH_DATA_SUCCESS',
                            payload: dataFromDB
                        })
                    }

                });




        
        


        

    };

};
