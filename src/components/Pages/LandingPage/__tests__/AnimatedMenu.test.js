import React from 'react';
import {mount, shallow} from 'enzyme';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import AnimatedMenu from 'components/Pages/LandingPage/components/AnimatedMenu';


describe('<AnimatedMenu />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AnimatedMenu/>);
    });
    it('renders the <Menu /> and <Button />', () => {
        expect(wrapper.find(Menu).length).toEqual(1);
        expect(wrapper.find(Button).length).toEqual(1);
    });
    afterEach(() => wrapper.unmount());
});

describe('<AnimatedMenu />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AnimatedMenu/>);
    });

    it('renders the <Menu /> and <MenuItem /> with correspond names', () => {
        expect(wrapper.find(Menu).length).toEqual(1);

        wrapper.find(Button).simulate('click');
        wrapper.update();
        const MenuItems = ['About', 'Skill', 'Project', 'Contact'];
        MenuItems.map(item => expect(wrapper.find(Menu).render().text()).toContain(item));
    });

    afterEach(() => {
        wrapper.unmount();
    });
});

