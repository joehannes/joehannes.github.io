import { FC } from "react";

import { Image, Reveal, Segment } from "semantic-ui-react";
import { GithubContribution } from "react-github-contributions-component";

import Branding from "../components/Branding";

import styles from "./Welcome.module.scss";
import trumpetSound from "../assets/audio/elephant.mp3";

const Welcome: FC = () => {
  let trumpHello = new Audio(trumpetSound);

  return (
    <>
      <Segment.Group className={styles.layout}>
        <Segment basic className={styles.avatar__container}>
          <Reveal animated="move up">
            <Reveal.Content visible>
              <Image
                onMouseEnter={() => trumpHello.play()}
                src="/assets/img/joevatar.jpg"
                circular
                size="tiny"
              />
            </Reveal.Content>
            <Reveal.Content hidden>
              <video
                src="/assets/vid/waving.webm"
                width="128"
                height="128"
                muted
                loop
              />
            </Reveal.Content>
          </Reveal>
        </Segment>
        <Segment basic className={styles.branding} textAlign="center">
          <Branding />
        </Segment>
        <Segment
          basic
          className={`dashboard__subtitle ${styles.subtitle}`}
          textAlign="center"
        >
          <h2>Frontend Developer: React/Typescript</h2>
        </Segment>
        <Segment basic textAlign="center" className={styles.githubcontrib}>
          <GithubContribution userName="joehannes" theme="jokerLight" />
        </Segment>
      </Segment.Group>
    </>
  );
};

export default Welcome;
