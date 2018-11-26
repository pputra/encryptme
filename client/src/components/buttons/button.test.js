import React from 'react';
import Button from './button';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../../store/index';



describe('<Button/>', () => {
    
  const wrapper = shallow(<Button store={Store}/>);
  
  
  it('renders components successfully', () => {
    
    expect(wrapper).toBeTruthy();
    
  });

  
    
});
