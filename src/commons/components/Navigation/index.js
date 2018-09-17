import React from 'react';
import styled from 'styled-components';

import LogoBrand from './LogoBrand';
import NavigationButton from './NavigationButton';
import NavigationList from "./NavigationList";

const Container = styled.div`
  width: 100%;
  display: flex; 
  top: 0;
  align-items: center;
  justify-content: space-between;
`;

const NavigationBackground = styled.div`
  	height: 6rem;
		width: 6rem;
		border-radius: 50%;
		position: fixed;
		right: 0;
		margin: 2rem;
		z-index: 1;
		transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
		
		${({active, theme}) => active && `
		    transform: scale(80);
		        background-image: radial-gradient(${theme.accent.light}, ${theme.accent.dark});
		`};
`;

class Navigation extends React.Component {
    state = {active: false};
    toggle = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        const {active} = this.state;
        return (
            <React.Fragment>

                <Container>
                    <LogoBrand {...this.props}/>
                    <NavigationButton active={active} {...this.props} toggle={this.toggle}/>
                </Container>
                <NavigationList active={active}/>
                <NavigationBackground active={active}/>

            </React.Fragment>
        );
    }

}

export default Navigation;