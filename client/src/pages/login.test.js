import React from 'react';
import Login from './login';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';

import Button from '../components/buttons/button';
import table from '../components/contents/table-dynamic';


describe('<Login/>', () => {
    
  const wrapper = mount(<Login store={Store}/>);
  
  
  it('renders page successfully', () => {
    
    expect(wrapper).toBeTruthy();
    
  });

  // it ('renders one button', () => {
    
   
  //   expect(wrapper.find(Button)).to.haveLength(1);
    
  // });


  it ('has loading as props ', () => {
    expect(wrapper.props()).toHaveProperty('loading');
  });


  it ('has error as props', () => {
    expect(wrapper.props()).toHaveProperty('error');
  });
  
  it ('has form as props', () => {
    expect(wrapper.props()).toHaveProperty('form');
  });

  it ('has login as props', () => {
    expect(wrapper.props()).toHaveProperty('login');
  });

  it ('has updateForm as props', () => {
    expect(wrapper.props()).toHaveProperty('updateForm');
  })
    
});
