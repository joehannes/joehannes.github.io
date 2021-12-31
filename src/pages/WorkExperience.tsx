import React, { FC } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Dimmer,
  Icon,
  Label,
  Loader,
  Rating,
  Segment,
} from "semantic-ui-react";
import {
  VerticalTimeline as Timeline,
  VerticalTimelineElement as TimelineElement,
} from "react-vertical-timeline-component";

import { RootState } from "StoreTypes";

import "react-vertical-timeline-component/style.min.css";
import styles from "./WorkExperience.module.scss";

const WorkExperience: FC = () => {
  const selectWorkExperience = (state: RootState) => {
    const {
      workExperience,
      company,
      contractType,
      location,
      position,
      project,
      technology,
    } = state.work;
    const _company = company.map((c) => ({
      ...c,
      location: location.find((l) => l.id === c.location),
      projects: c.projects.map((p) => project.find((_p) => p.includes(_p.id))),
    }));

    const _workExperience = workExperience
      .map((w) => ({
        ...w,
        technology: w.technology.map((t) =>
          technology.find((_t) => t === _t.id)
        ),
        position: position.find((p) => p.id === w.position),
        remote: location.find((l) => l.id === w.remote),
        contract: contractType.find((cT) => cT.id === w.contract),
        company: _company.find((_c) => _c.id === w.company),
      }))
      .sort((a, b) => b.date.to - a.date.to);

    return _workExperience;
  };

  const jsonData = useSelector(selectWorkExperience);

  const describeDateRange = ({ from, to }: { from: number; to: number }) => {
    const _from = new Date(from);
    const _to = new Date(to);

    return `${_from.getMonth()}/${_from.getFullYear()} - ${_to.getMonth()}/${_to.getFullYear()}`;
  };

  if (jsonData.length === 0) {
    return (
      <Dimmer active className={styles.dimmer}>
        <Loader size="massive" />
      </Dimmer>
    );
  }

  return (
    <>
      <Timeline>
        {jsonData.map((job: any, i: number) => (
          <TimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{ ...job.style }}
            contentArrowStyle={{
              borderRight: `7px solid  ${job.company.icon.color}`,
            }}
            date={describeDateRange(job.date)}
            iconStyle={{ ...job.style }}
            icon={
              <Icon
                color={job.company.icon.color}
                name={job.company.icon.id}
                size="big"
                className={styles.icon}
              />
            }
          >
            <Label
              as="a"
              color={job.company.icon.color}
              ribbon={(i + 2) % 2 === 0 ? true : "right"}
              className={
                (i + 2) % 2 === 0 ? styles.ribbon_left : styles.ribbon_right
              }
            >
              {job.company.industry}
            </Label>
            <br />
            <br />
            <h3 className="vertical-timeline-element-title">
              {job.position.title} {"@" + job.company.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              {job.contract.contract}
              {"@" +
                (job.remote
                  ? `${job.remote.city}/${job.remote.country}`
                  : `${job.company.location.city}/${job.company.location.country}`)}
              <br />
              {"#" + job.description.function}
            </h4>
            <Segment.Group>
              <Segment basic className={styles.label}>
                <Label color={job.company.icon.color} horizontal>
                  company size
                </Label>
                {Array(7)
                  .fill("★")
                  .map((el, i) => (i >= job.company.size ? "☆" : el))
                  .join("")}
              </Segment>
              <Segment basic className={styles.label}>
                <Label color={job.company.icon.color} horizontal>
                  method
                </Label>
                {job.description.method}
              </Segment>
              <Segment basic className={styles.label}>
                <Label color={job.company.icon.color} horizontal>
                  focus
                </Label>
                {job.description.focus}
              </Segment>
              <Segment basic>
                {job.technology.map((tag: any, j: number) => (
                  <Label
                    as="a"
                    tag
                    key={j}
                    className={styles.tag}
                    color={job.company.icon.color}
                  >
                    {tag.title}
                  </Label>
                ))}
              </Segment>
              {job.company.url && (
                <Segment basic>
                  <Button
                    icon="world"
                    href={job.company.url}
                    as="a"
                    target="_blank"
                    rel="noreferrer"
                  />
                </Segment>
              )}
            </Segment.Group>
          </TimelineElement>
        ))}
      </Timeline>
    </>
  );
};

export default WorkExperience;
