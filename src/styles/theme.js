export const THEME = {
   light: 'light',
   dark: 'dark'
};

const darkPalette = {
   main: '#131116',
   light: '#353535',
   dark: '#0F0F0F'
};

const lightPalette = {
   main: '#F9F9F9',
   light: '#FFFFFA',
   dark: '#E0E0E0'
};

const accentPalette = {
   main: '#3FCFFF',
   light: '#99E5FF',
   dark: '#30c2ff'
};

export default {
   currentVal: THEME.light,
   set current(value) {
      if (Object.values(THEME).includes(value)) {
         this.currentVal = value;
      } else {
         console.error('value for theme is not valid');
      }
   },
   get current() {
      return this.currentVal;
   },
   get primary() {
      return this.currentVal === THEME.light ? darkPalette : lightPalette;
   },
   get secondary() {
      return this.currentVal === THEME.light ? lightPalette : darkPalette;
   },
   accent: accentPalette
}
;


