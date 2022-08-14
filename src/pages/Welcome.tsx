import { FC, useState, useCallback, useEffect } from "react";
import { Image, Loader, Reveal, Segment } from "semantic-ui-react";
import Heatmap from "react-calendar-heatmap";

import Branding from "../components/Branding";

import styles from "./Welcome.module.scss";
import trumpetSound from "../assets/audio/elephant.mp3";
import "react-calendar-heatmap/dist/styles.css";

const Welcome: FC = () => {
  const [data, setData] = useState<{ date: string; count: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  let trumpHello = new Audio(trumpetSound);

  const transformData = (rawData: any[], provider: "gitlab" | "github"): { date: string; count: number; }[] => {
    let data = null;

    switch (provider) {
      case "gitlab":
        data = rawData.map((item: any) => ({
          date: item[0],
          count: item[1],
        }));
        break;
      case "github":
        data = rawData.flatMap((weekDataset: any) =>
          weekDataset.contributionDays.map((dayDataset: any) => ({
            date: dayDataset.date,
            count: dayDataset.contributionCount,
          }))
        );
        break;
    }

    return data;
  }

  const fetchGithub = useCallback(async () => {
    const response = await fetch(
      "https://shielded-savannah-53593.herokuapp.com"
    );
    const jsonData = await response.json();

    setData((prevData) => [...prevData, ...transformData(jsonData.user.contributionsCollection.contributionCalendar.weeks, "github")]);
  }, []);

  const fetchGitlab = useCallback(async () => {
    const response = await fetch(
      "https://gitlab.com/users/joehannes/calendar.json"
    );
    const jsonData = await response.json();

    setData((prevData) => [...prevData, ...transformData(jsonData, "gitlab")]);
  }, []);

  const fetchData = useCallback(async () => {
    if (!isLoading) {
      setIsLoading(true);
    }

    try {
      await fetchGithub();
      await fetchGitlab();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading]);

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
          {isLoading || !data?.length ? (
            <Loader />
          ) : (
            <Heatmap
              values={data}
              classForValue={(value: { count: number; date: string }) =>
                !value?.count
                  ? "color-empty"
                  : `color-scale-${Math.min(
                      4,
                      value.count === 1 ? 1 : Math.floor(Math.log2(value.count))
                    )}`
              }
            />
          )}
        </Segment>
      </Segment.Group>
    </>
  );
};

export default Welcome;
