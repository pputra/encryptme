import React from 'react';
import Register from './register';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import Store from '../store/index';


describe('<Register/>', () => {
    const wrapper = mount(<Register store={Store}/>);

    it('renders page successfully', () => {
        expect(wrapper).toBeTruthy();
    });

    
})
