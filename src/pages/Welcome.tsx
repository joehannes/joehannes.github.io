import React, { FC } from 'react';
import {
  Image,
  Reveal,
  Segment,
} from 'semantic-ui-react';
import VideoLooper from 'react-video-looper';
import { useSpring, animated } from 'react-spring';

import CodersRankActivity from '@codersrank/activity';

import Branding from '../components/Branding';

import styles from './Welcome.module.scss';
import trumpetSound from '../assets/audio/elephant.mp3';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'codersrank-activity': any;
    }
  }
}

window.customElements.define('codersrank-activity', CodersRankActivity as unknown as CustomElementConstructor);

const Welcome: FC = () => {
  let trumpHello = new Audio(trumpetSound);

  return (<>
    <Segment.Group
      className={styles.layout}
    >
      <Segment
        basic
        className={styles.avatar__container}
      >
        <Reveal animated="move up">
          <Reveal.Content visible>
            <Image
              onMouseEnter={() => trumpHello.play()}
              src="/assets/img/joevatar.jpg"
              circular size="tiny"
            />
          </Reveal.Content>
          <Reveal.Content hidden>
            <VideoLooper
              start={0}
              end={2}
              width="128px"
              height="128px"
              source="/assets/vid/waving.webm"
            />
          </Reveal.Content>
        </Reveal>
      </Segment>
      <Segment
        basic
        className="dashboard__subtitle"
        textAlign="center"
      >
        <Branding />
      </Segment>
      <Segment
        basic
      >
        <codersrank-activity
          username="joehannes"
          labels
          legend
          tooltip
          branding={false}
        >
        </codersrank-activity>
      </Segment>
      <Segment
        basic
        className="dashboard__subtitle"
        textAlign="center"
      >
        <h2>Frontend Developer: React/Typescript</h2>
      </Segment>
    </Segment.Group>
  </>);
}

export default Welcome;
