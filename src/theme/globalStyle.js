import {injectGlobal} from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: 'M PLUS Rounded 1c', sans-serif; 
    overflow-x: hidden;
    overflow-y: hidden;
  }
  *, 
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
`;

export const theme = {
    primary: {
        main: '#131116',
        light: '#353535',
        dark: '#0F0F0F'

    },
    secondary: {
        main: '#F9F9F9',
        light: '#FFFFFA',
        dark: '#E0E0E0'
    },
    accent: {
        main: '#3FCFFF',
        light: '#99E5FF',
        dark: '#30c2ff'
    }
};