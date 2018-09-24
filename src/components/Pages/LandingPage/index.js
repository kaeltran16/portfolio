import React from 'react';
import styled from 'styled-components';
import Navigation from 'commons/components/Navigation';
import Header from './components/Header';
import NextPageButton from 'commons/components/NextPageButton';
import Background from "./components/Background";
import withScroll from "../../../HOCs/withScroll";
import {device} from "../../../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
  
  @media ${device.mobileS} {
      grid-template-rows: 1fr 6fr 1.25fr;
  }

`;

class Landing extends React.Component {
    static defaultProps = {nextRoute: '/'};

    render() {
        const {nextRoute} = this.props;
        return (
            <div>
                <Background/>
                <Container>
                    <Navigation color='light' size={5}/>
                    <Header/>
                    <NextPageButton align='center' color='light' size={5} nextRoute={nextRoute}/>
                </Container>
            </div>
        );
    }
}

export const LandingPage = withScroll(Landing);