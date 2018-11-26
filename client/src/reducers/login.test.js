import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';

;


describe('Login Reducer', () => {
    
  //reducer border
  it('expects isLogin to be false before dispatching LOGIN_SUCCESS', () => {
    let isLogin = Store.getState().loginReducer.isLogin;
    
    expect(isLogin).toBeFalsy();
  });

  it('expects isLogin to be true after dispatching LOGIN_SUCCESS', () => {
    Store.dispatch({
      type: 'LOGIN_SUCCESS'
    });

    let isLogin = Store.getState().loginReducer.isLogin;

    expect(isLogin).toBeTruthy();
  });

  it('expects isLogin to be false after dispatching LOGOUT', () => {
    Store.dispatch({
      type: 'LOGOUT'
    });

    let isLogin = Store.getState().loginReducer.isLogin;

    expect(isLogin).toBeFalsy();
  });

  it('expects loading to be true after dispatching LOGIN_LOADING', () => {
    Store.dispatch({
      type: 'LOGIN_LOADING'
    });

    let loading = Store.getState().loginReducer.loading;

    expect(loading).toBeTruthy();
  });


  
  it('expects isLogin to be false after dispatching LOGIN_FAILED', () => {
    Store.dispatch({
      type: 'LOGIN_FAILED'
    });

    let isLogin = Store.getState().loginReducer.isLogin;

    expect(isLogin).toBeFalsy();
  });
  

});
