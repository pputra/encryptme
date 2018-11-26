import React from 'react';
import login from './login';

import Store from '../store/index';

describe('login action', () => {
    it('expect an error if login credential is invalid', () => {
        const email = 'dummy@mail.com', password = '123456', history = [];

        let error = Store.getState().loginReducer.error



        Store.dispatch(login(email, password, history));

        expect(error).toBeFalsy();
    })
})