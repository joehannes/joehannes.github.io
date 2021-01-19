import React, { FC } from 'react';
import {
  Segment,
} from 'semantic-ui-react';
import VideoLooper from 'react-video-looper';

import CodersRankActivity from '@codersrank/activity';

import styles from './Welcome.module.scss';
// import wavingVid from '../assets/vid/waving.webm';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'codersrank-activity': any;
    }
  }
}

window.customElements.define('codersrank-activity', CodersRankActivity as unknown as CustomElementConstructor);

const Welcome: FC = () => {
  return (<>
    <Segment.Group
      className={styles.layout}
    >
      <Segment
        basic
        className={styles.avatar__container}
      >
        <VideoLooper
          start={0}
          end={2}
          width="128px"
          height="128px"
          source="/assets/vid/waving.webm"
        />
      </Segment>
      <Segment
        basic
        className="dashboard__subtitle"
        textAlign="center"
      >
        <h1>joehannes</h1>
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
