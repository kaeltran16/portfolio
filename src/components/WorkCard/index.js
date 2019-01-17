import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, config, useTransition } from 'react-spring/hooks';
import * as PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
        position: relative;

`;

const Image = styled.img`
    max-width: 100%;
    height: 50%;
    background-size: cover;
    border: .2rem solid ${props => props.theme.accent.dark};
    border-radius: 1rem;
    position: absolute;
`;


const WorkCard = ({ project }) => {
   const [hover, setHover] = useState(false);

   const trails = useTransition({
      items: [project.name],
      config: config.wobbly,
      from: { opacity: 0, transform: 'translateX(-100px)' },
      enter: { opacity: 1, transform: 'translateX(0)' },
      leave: { opacity: 0, transform: 'translateX(100px)' },
      keys: item => item.name
   });

   const render = () => trails.map(({ item, key, props }) =>
      <animated.p key={key} style={{
         position: 'relative ',
         ...props
      }}>
         {item}
      </animated.p>
   );
   console.log(hover);

   return (
      <Container>
         <Image
            src={`${process.env.PUBLIC_URL}/assets/img/${project.name}.png`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}/>
         {render()}
      </Container>
   );
};

/*<Container>
   <CardContainer>
      <DetailContainer>
         <WorkDetail project={project}/>
         <AttentionButton delay={0} url={project.demoUrl} position='left'>
            Live demo
         </AttentionButton>
         <AttentionButton delay={1} url={project.srcUrl} position='right'>
            View source
         </AttentionButton>
      </DetailContainer>
      <Image
         src={`${process.env.PUBLIC_URL}/assets/img/${project.name}.png`}/>
   </CardContainer>
</Container>*/

WorkCard.propTypes = {
   project: PropTypes.shape({
      name: PropTypes.string.isRequired,
      subHeading: PropTypes.string.isRequired,
      intro: PropTypes.string.isRequired,
      demoUrl: PropTypes.string.isRequired,
      srcUrl: PropTypes.string.isRequired
   })
};

export default WorkCard;
