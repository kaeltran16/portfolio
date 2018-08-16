import React from 'react';
import {shallow} from 'enzyme';
import SvgIcon from '@material-ui/core/SvgIcon';

import NavBar from '../components/NavBar';
import AnimatedMenu from 'components/Pages/LandingPage/components/AnimatedMenu';


describe('<NavBar />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavBar/>);
    });
    it('renders the <AnimatedMenu />', () => {
        expect(wrapper.find(AnimatedMenu).length).toEqual(1);
    });
    it('renders the Logo', () => {
        expect(wrapper.find(SvgIcon).length).toEqual(1);
    });
    afterEach(() => wrapper.unmount());
});

