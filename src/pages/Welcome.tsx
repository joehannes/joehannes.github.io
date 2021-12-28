import { FC, useState, useEffect } from "react";
import { Image, Loader, Reveal, Segment } from "semantic-ui-react";
import Heatmap from "react-calendar-heatmap";

import Branding from "../components/Branding";

import styles from "./Welcome.module.scss";
import trumpetSound from "../assets/audio/elephant.mp3";
import "react-calendar-heatmap/dist/styles.css";

const Welcome: FC = () => {
  const [data, setData] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(false);
  let trumpHello = new Audio(trumpetSound);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://shielded-savannah-53593.herokuapp.com"
      );
      const jsonData = await response.json();

      setData(
        transformData(
          jsonData.user.contributionsCollection.contributionCalendar.weeks
        )
      );
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const transformData = (rawData: any[]): any[] =>
    rawData.flatMap((weekDataset: any) =>
      weekDataset.contributionDays.map((dayDataset: any) => ({
        date: dayDataset.date,
        count: dayDataset.contributionCount,
      }))
    );

  useEffect(() => {
    fetchData();
  }, []);

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
                autoPlay
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
          {isLoading || !data?.length ? <Loader /> : <Heatmap values={data} />}
        </Segment>
      </Segment.Group>
    </>
  );
};

export default Welcome;
