import React from 'react';
import Navbar from './index';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router} from "react-router-dom";
Enzyme.configure({ adapter: new Adapter() });

import Store from '../../store/index';



describe('<Navbar/>', () => {
    
  const wrapper = mount(<Router><Navbar store={Store}/></Router>);
  
  
  it('renders components successfully', () => {
    
    expect(wrapper).toBeTruthy();
    
  });

  
    
});
