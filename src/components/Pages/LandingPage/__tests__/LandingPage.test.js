import React from 'react';
import {shallow} from 'enzyme';

import {LandingPage} from 'components/Pages';
import NavBar from 'components/Pages/LandingPage/components/NavBar';
import Background from 'components/Pages/LandingPage/components/Background';
import NextPageButton from 'components/Pages/LandingPage/components/NextPageButton';
import ViewMoreButton from 'components/Pages/LandingPage/components/ViewMoreButton';
import WelcomeText from 'components/Pages/LandingPage/components/WelcomeText';


describe('<LandingPage />', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<LandingPage/>));
    it('renders the <NavBar />', () => {
        expect(wrapper.find(NavBar).length).toEqual(1);
    });
    it('renders the <Background />', () => {
        expect(wrapper.find(Background).length).toEqual(1);
    });
    it('renders the <NextPageButton />', () => {
        expect(wrapper.find(NextPageButton).length).toEqual(1);
    });
    it('renders the <ViewMoreButton />', () => {
        expect(wrapper.find(ViewMoreButton).length).toEqual(1);
    });
    it('renders the <WelcomeText />', () => {
        expect(wrapper.find(WelcomeText).length).toEqual(1);
    });
    afterEach(() => wrapper.unmount());
});
