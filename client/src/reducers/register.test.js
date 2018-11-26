import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';


describe('register reducer', () => {
    
    it('expects loading to be false before any operation', () => {
        let loading = Store.getState().registerReducer.loading;

        expect(loading).toBeFalsy();
    });

    it('expects loading to be true when REGISTER_LOADING is dispatched', () => {
        Store.dispatch({
            type: 'REGISTER_LOADING'
        });

        let loading = Store.getState().registerReducer.loading;
        expect(loading).toBeTruthy();
    });

    it('expects loading and error to be false when REGISTER_SUCCESS is dispatched', () => {
        
        Store.dispatch({
            type: 'REGISTER_SUCCESS'
        });

        let { loading, error } = Store.getState().registerReducer;

        expect(loading).toBeFalsy();
        expect(error).toBeFalsy();

    });

    it ('expects an error if register is failed', () => {
        Store.dispatch({
            type: 'REGISTER_FAILED',
            payload: 'error'
        });

        let { error, errorMessage } = Store.getState().registerReducer;

        expect(error).toBeTruthy();
        expect(errorMessage).toBeTruthy();
    });
    
})
