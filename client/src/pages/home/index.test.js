import React from 'react';
import Home from './index';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../../store/index';



describe('<Home/>', () => {
    
  const wrapper = mount(<Home store={Store}/>);
  
  
  it('renders page successfully', () => {
    
    expect(wrapper).toBeTruthy();
    
  });

  
    
});
