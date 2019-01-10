import { keyframes } from 'styled-components';

export const fadeInRotate = keyframes`
    0% {
        opacity: 0;
        transform: rotate(0deg);
    }
    50% {
      opacity: .5;
        transform: rotate(180deg);
    }
    100% {
        opacity: 1;
         transform: rotate(-360deg);
    }
`;

export const loadProgress = keyframes`
    0% {
        width: 0;
    }
    10% {
        width: 5%;
    }
    20% {
        width: 15%;
    }
    30% {
        width: 25%;
    }
    40% {
        width: 30%;
    }
    50% {
        width: 44%;
    }
    60% {
        width: 50%;
    }
    70% {
        width: 72%;
    }
    80% {
        width: 84%;
    }
    90% {
        width: 92%;
    }
    100% {
        width: 100%;
    }
`;

export const fadeInSlowly = keyframes`
    0% {opacity: 0;}

    50% {opacity: .5;}

    100% {opacity: 1;}
`;

export const moveDown = keyframes`
    25% {
          opacity: 1;
    }
    33% {
          opacity: 1;
          transform: translateY(30px);
    }
    67% {
          opacity: 1;
          transform: translateY(40px);
    }
    100% {
        opacity: 0;
        transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
    }
`;

export const zoomIn = keyframes`
  from {
    transform: scale(0);
  }
  
  to {
    transform: scale(1);
  }
`;

export const lightSpeedIn = keyframes`
    0% {
        transform: translateY(100%) skewX(-0deg);
    opacity: 0;
}
    60% {
        transform: translateY(-10%) skewX(-20deg);
    opacity: 1;
}
    80% {
        transform: translateY(0%) skewX(10deg);
    opacity: 1;
}
    100% {
        transform: translateY(0%) skewX(0deg);
    opacity: 1;
}
`;

export const jackInTheBox = keyframes`
    from {
        opacity: 0;
        transform: scale(0.1) rotate(30deg);
        transform-origin: center bottom;
    }

    50% {
        transform: rotate(-10deg);
}

    70% {
        transform: rotate(3deg);
}

    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const moveUpAndDown = distance => keyframes`
    from{
        transform: translate(0rem, 0);
    }
    to {
        transform: translate(0rem, ${distance}rem);
    }
`;

export const moveAround = distance => keyframes`
    from{
        transform: translate(${distance}rem, 0);
    }
    to{
        transform: translate(0rem, 0);
    }
`;

export const bounceInUp = keyframes`
    0% {
      opacity: 0;
      transform: translateY(2000px);
    }
    60% {
      opacity: 1;
      transform: translateY(-30px);
    }
    80% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
`;

export const fadeInUp = keyframes`
    0% {
      opacity:0;
      transform:  translate(0px,40px)  ;
    }
    
    100% {
      opacity:1;
      transform:  translate(0px,0px)  ;
    }
`;
