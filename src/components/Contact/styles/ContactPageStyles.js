import styled from 'styled-components';

const AboutPageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.primary.main};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr .75fr 3fr 1fr;
    justify-content: center;  
`;

export default AboutPageContainer;
