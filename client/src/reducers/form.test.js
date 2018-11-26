import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';


describe('form reducer', () => {

    

    it('expects all state to be empty initially', () => {

        let { dataId, url, username, password, email, keyword } = Store.getState().formReducer;

        expect(dataId).toMatch('');
        expect(url).toMatch('');
        expect(username).toMatch('');
        expect(password).toMatch('');
        expect(email).toMatch('');
        expect(keyword).toMatch('');
    });

    it('expects forms to be filled after dispatching UPDATE_FORM and then reseted after dispatching RESET_FORM', () => {

        Store.dispatch({
            type: 'UPDATE_FORM',
            target: 'dataId',
            payload: 'foo'
        });

        Store.dispatch({
            type: 'UPDATE_FORM',
            target: 'url',
            payload: 'foo'
        });

        Store.dispatch({
            type: 'UPDATE_FORM',
            target: 'username',
            payload: 'foo'
        });

        Store.dispatch({
            type: 'UPDATE_FORM',
            target: 'password',
            payload: 'foo'
        });

        Store.dispatch({
            type: 'UPDATE_FORM',
            target: 'email',
            payload: 'foo'
        });

        Store.dispatch({
            type: 'UPDATE_FORM',
            target: 'keyword',
            payload: 'foo'
        });

        let { dataId, url, username, password, email, keyword } = Store.getState().formReducer;

        expect(dataId).toMatch('foo');
        expect(url).toMatch('foo');
        expect(username).toMatch('foo');
        expect(password).toMatch('foo');
        expect(email).toMatch('foo');
        expect(keyword).toMatch('foo');

        Store.dispatch({
            type: 'RESET_FORM'
        });

        expect(dataId).toMatch('');
        expect(url).toMatch('');
        expect(username).toMatch('');
        expect(password).toMatch('');
        expect(email).toMatch('');
        expect(keyword).toMatch('');
        
    });
});