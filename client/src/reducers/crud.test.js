import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';


describe('crud reducer', () => {

    it('expects initial state to be falsy', () => {
        let { alert, alertMessage, loading } = Store.getState().crudReducer;

        expect(alert).toBeFalsy();
        expect(alertMessage).toBeFalsy();
        expect(loading).toBeFalsy();
        
    });

    it('expects crud loading to be true when CRUD_LOADING is dispatched', () => {
        
        Store.dispatch({
            type:'CRUD_LOADING'
        });

        let { loading } = Store.getState().crudReducer;

        expect(loading).toBeTruthy();
    });
    
    it('expects alert to be true if CRUD_ERROR is dispatched', () => {
        
        Store.dispatch({
            type: 'CRUD_ERROR'
        });

        let { alert, loading } = Store.getState().crudReducer;

        expect(alert).toBeTruthy();
        expect(loading).toBeFalsy();
    });

    it('should return a correct alert message if CREATE_DATA_SUCCESS is dispatched', () => {
        Store.dispatch({
            type: 'CREATE_DATA_SUCCESS'
        });

        let { alert, loading, alertMessage } = Store.getState().crudReducer;

        expect(alertMessage).toMatch('your password has been stored');
        expect(alert).toBeTruthy();
        expect(loading).toBeFalsy();
    });

    it('should return a correct alert message if DELETE_DATA_SUCCESS is dispatched', () => {
        Store.dispatch({
            type: 'DELETE_DATA_SUCCESS'
        });

        let { alert, loading, alertMessage } = Store.getState().crudReducer;

        expect(alertMessage).toMatch('your password has been deleted');
        expect(alert).toBeTruthy();
        expect(loading).toBeFalsy();
    });

    it('should return a correct alert message if UPDATE_DATA_SUCCESS is dispatched', () => {
        Store.dispatch({
            type: 'UPDATE_DATA_SUCCESS'
        });

        let { alert, loading, alertMessage } = Store.getState().crudReducer;

        expect(alertMessage).toMatch('your password has been updated');
        expect(alert).toBeTruthy();
        expect(loading).toBeFalsy();
    });
});