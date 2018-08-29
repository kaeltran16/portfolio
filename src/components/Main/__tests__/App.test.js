import React from 'react';
import {shallow} from 'enzyme';

import MainContainer from '../MainContainer';
import {LandingPage} from 'components/Pages';


describe('<App />', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<MainContainer/>));

    it('renders the <LandingPage />', () => {
        expect(wrapper.find(LandingPage).length).toEqual(1);
    });
    afterEach(() => wrapper.unmount());
});

