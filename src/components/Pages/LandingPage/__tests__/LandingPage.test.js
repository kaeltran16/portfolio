import React from 'react';
import {shallow} from 'enzyme';

import {LandingPage} from 'components/Pages';
import Background from '../components/Background';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

describe('<LandingPage />', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<LandingPage/>));
    it('renders the <Background />', () => {
        expect(wrapper.find(Background).length).toEqual(1);
    });
    it('renders the <Navigation />', () => {
        expect(wrapper.find(Navigation).length).toEqual(1);
    });
    it('renders the <Header />', () => {
        expect(wrapper.find(Header).length).toEqual(1);
    });
    afterEach(() => wrapper.unmount());
});
