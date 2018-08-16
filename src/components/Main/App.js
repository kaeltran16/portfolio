import React from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

import {LandingPage} from 'components/Pages';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fafafa',
            light: '#ffffff',
            dark: '#c7c7c7',
            contrastText: '#000000'
        },
        secondary: {
            main: '#131116',
            light: '#39373c',
            dark: '#000000',
            contrastText: '#ffffff'
        }
    }
});

const App = () => (
    <MuiThemeProvider theme={theme}>
        <LandingPage/>
    </MuiThemeProvider>
);

export default App;