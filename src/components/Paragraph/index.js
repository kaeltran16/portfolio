import { DataType, withDataContext } from 'appContext';
import React from 'react';
import * as PropTypes from 'prop-types';
import { ParagraphStyle } from './styles';
import { config, useTransition } from 'react-spring/hooks';


const Paragraphs = ({ contents }) => {
   const spices = useTransition({
      config: config.wobbly,
      from: { opacity: 0, transform: 'scale(0)' },
      enter: { opacity: 1, transform: 'scale(1)' },
      leave: { opacity: 0, transform: 'scale(0)' },
      items: contents,
      trail: 600,
      unique: true
   });

   const renderTexts = () =>
      spices.map(({ item, key, props }) =>
         <ParagraphStyle.Text key={key} style={{ ...props }}>
            {item}
         </ParagraphStyle.Text>
      );

   return (
      <ParagraphStyle.Container>
         {renderTexts()}
      </ParagraphStyle.Container>
   );
};


Paragraphs.propTypes = {
   contents: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default withDataContext(Paragraphs, DataType.AboutPage);
