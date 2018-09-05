import React from 'react';
import styled, {css} from 'styled-components';



const Bar = styled.div`
    background-color: ${props => props.theme.primary.main}
    width: 4rem;
    height: .6rem;
    &:not(:first-child) {
    margin-top: .6rem;
    }
    transition: all 0.4s;
`;


const Container = styled.div`
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  
    ${props => props.active && css`
      ${Bar} {
        &:nth-child(1) {
          transform: rotate(-45deg) translate(-.9rem, .6rem);
        }
    
        &:nth-child(2) {
          opacity: 0;
        }
    
        &:nth-child(3) {
          transform: rotate(45deg) translate(-1rem, -.8rem);
        }
  `}
  
`;


class NavigationButton extends React.Component {
    state = {active: false};
    toggle = () => {
        this.setState({active: !this.state.active});
    };

    render(){
        return(
            <Container onClick={() => this.toggle()} active={this.state.active}>
                <Bar/>
                <Bar/>
                <Bar/>
            </Container>
        );
    }
}

export default NavigationButton;