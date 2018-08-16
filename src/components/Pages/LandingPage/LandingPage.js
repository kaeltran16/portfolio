import React from 'react';
import Grid from '@material-ui/core/Grid';

import Background from './components/Background';
import NavBar from './components/NavBar';
import WelcomeText from './components/WelcomeText';
import ViewMoreButton from './components/ViewMoreButton';
import NextPageButton from './components/NextPageButton';


const LandingPage = () => (
    <Grid style={{width: '98vw', height: '98vh'}} container direction='column' justify='space-between'>
        <Background/>
        <Grid item>
            <NavBar/>
        </Grid>
        <Grid item container justify='center' direction='column' alignItems='center' spacing={40}>
            <Grid item>
                <WelcomeText/>
            </Grid>
            <Grid item>
                <ViewMoreButton/>
            </Grid>
        </Grid>
        <Grid item container justify='flex-end' alignItems='flex-end'>
            <NextPageButton/>
        </Grid>
    </Grid>
);

export {LandingPage};