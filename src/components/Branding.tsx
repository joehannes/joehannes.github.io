import React, { FC, useRef } from 'react';
import { animated, useSpring, useChain } from 'react-spring';

import styles from './Branding.module.scss';
import jsonData from '../assets/data/branding.json';

interface IBrandingProps {
  style?: {
    [prop: string]: string | number;
  }
}

const Branding: FC<IBrandingProps> = ({ style }) => {
  const strokeAniRef = useRef();
  const fillAniRef = useRef();
  const fireAniRef = useRef();
  const strokeAni = useSpring({ x: 0, from: { x: -1620}, ref: strokeAniRef, config: { duration: 3000 } });
  const fillAni = useSpring({ o: 0.3, from: { o: 0 }, ref: fillAniRef, config: { duration: 3000 } });
  const fireAni = useSpring({ o: 1, from: { o: 0 }, ref: fireAniRef, config: { duration: 3000 } });

  useChain([strokeAniRef, fillAniRef, fireAniRef]);

  return (<>
    <animated.svg
      height="110px"
      fill="white"
      fillOpacity={fillAni.o}
      stroke="white"
      strokeDasharray="1620"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      strokeDashoffset={strokeAni.x}
      className={styles.branding}
    >
      <path  d={jsonData.path} />
    </animated.svg>
    <animated.div className={styles.fire} style={{ opacity: fireAni.o }}>
      {Array(50).fill(0).map((x, i) => (<div key={x} className={styles.particle} />))}
    </animated.div>
  </>);
}

export default Branding;
