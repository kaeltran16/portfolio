import {injectGlobal} from 'styled-components';
import {device} from "../responsive";

injectGlobal`
  html {
    box-sizing: border-box;
   
  
    
    
    
       @media ${device.mobileS} {
        font-size: 40%;
      }
        @media ${device.mobileM} {
        font-size: 30%;
      }
        @media ${device.mobileL} {
        font-size: 35%;
      }

  @media ${device.tablet} {
        font-size: 50%;
      }
             @media ${device.laptop} {font-size: 62.5%}

         @media ${device.laptopL}
      {font-size: 62.5%;}
        @media ${device.desktop} {font-size: 100%;}
            @media ${device.desktopL} {font-size: 120%;}

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