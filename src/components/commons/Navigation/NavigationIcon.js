import React from 'react';
import styled, {css, keyframes} from 'styled-components';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;


const Bar = styled.div`
    &:not(:first-child) {
      margin-top: .6rem;
    }
    transition: all 0.4s;
    width: 100%;
    height: 12.5%;
              
       
`;


const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: ${props => `${props.size}rem`};
    height: ${props => `${props.size}rem`};
    
    ${Bar} {
      background-color: ${props => props.color === 'dark'
    ? props.theme.primary.main
    : props.theme.secondary.main };;
    }
    
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
    
   animation: ${fadeIn} 2s;
   
  
`;


class NavigationButton extends React.Component {
    state = {active: false};
    toggle = () => {
        this.setState({active: !this.state.active});
    };

    render() {
        const {color, size} = this.props;
        return (
            <Container color={color} size={size} onClick={() => this.toggle()} active={this.state.active}>
                <Bar/>
                <Bar/>
                <Bar/>
            </Container>
        );
    }
}

export default NavigationButton;