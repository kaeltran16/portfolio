import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const useTheme = () => {
   const theme = useContext(ThemeContext);
   console.log(theme);

};

export default useTheme;
