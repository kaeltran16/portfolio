import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';
import Navigation from 'components/commons/Navigation';
import Header from './components/Header';
import NextPageButton from 'components/commons/NextPageButton';
import Background from "./components/Background";
import withScroll from "../../../HOCs/withScroll";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr;
  position: absolute;
  top: 0;
`;

class Landing extends React.Component {
    render() {
        return (
            <div ref='container'>
                <Background/>
                <Container>
                    <Navigation color='light' size={5}/>
                    <Header/>
                    <NextPageButton align='center' color='light' size={5}/>
                </Container>
            </div>
        );
    }
}

export const LandingPage = withScroll(withRouter(Landing), '/about', null);