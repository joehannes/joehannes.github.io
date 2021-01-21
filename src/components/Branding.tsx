import React, { FC, useRef } from 'react';
import { animated, useSpring, useChain } from 'react-spring';

import jsonData from '../assets/data/branding.json';

interface IBrandingProps {
  style?: {
    [prop: string]: string | number;
  }
}

const Branding: FC<IBrandingProps> = ({ style }) => {
  const strokeAniRef = useRef();
  const fillAniRef = useRef();
  const strokeAni = useSpring({ x: 0, from: { x: -1620}, ref: strokeAniRef, config: { duration: 3000 } });
  const fillAni = useSpring({ o: 1, from: { o: 0 }, ref: fillAniRef, config: { duration: 3000 } });

  useChain([strokeAniRef, fillAniRef]);

  return (
    <animated.svg
      height="110px"
      fill="black"
      fillOpacity={fillAni.o}
      stroke="black"
      strokeDasharray="1620"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      strokeDashoffset={strokeAni.x}
    >
      <path  d={jsonData.path} />
    </animated.svg>
  );
}

export default Branding;
