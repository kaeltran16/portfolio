import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

import Data from 'data/data';

const Container = styled.div`
  position: relative;
`;

const WelcomeText = () => {
    const {welcomeText, headline} = Data.LandingPage;
    return (
        <Container>
            <Typography variant='display4' align='center' color='primary'>
                {welcomeText}
            </Typography>
            <Typography variant='display2' align='center' color='primary'>
                {headline}
            </Typography>
        </Container>
    );
};

export default WelcomeText;