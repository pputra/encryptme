import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import loginReducer from '../reducers/login';
import registerReducer from '../reducers/register';
import dataReducer from '../reducers/data';
import formReducer from '../reducers/form';
import crudReducer from '../reducers/crud';




const combinedReducers = combineReducers({
  loginReducer, dataReducer, formReducer,crudReducer, registerReducer
});


const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;