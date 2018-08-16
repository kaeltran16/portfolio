import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

import Menu from './AnimatedMenu';

const Container = styled(Grid)`
  position: relative;
`;

const NavBar = () => (
    <Container direction='row' justify='space-between' alignItems='flex-start' container>
        <Grid item>
            <SvgIcon color='primary'>
                <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/>
            </SvgIcon>
        </Grid>
        <Grid item>
            <Menu/>
        </Grid>
    </Container>

);

export default NavBar;