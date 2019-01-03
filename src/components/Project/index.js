import React from 'react';
import styled from 'styled-components';
import { DataType, withDataContext } from '../../appContext';

const Grid = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-template-rows: repeat(2fr);
`;
const Work = ({ details }) => {
   const renderWorks = () => {
      details.map((workDetail, index) => <Proj
   };
   return (
      <Grid>

      </Grid>
   );
};

export default withDataContext(Work, DataType.WorkPage);
