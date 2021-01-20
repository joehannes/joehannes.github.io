import React, { FC, useState } from 'react';
import {
  Button,
  Icon,
  Label,
  Rating,
  Segment,
} from 'semantic-ui-react';
import {
  VerticalTimeline as Timeline,
  VerticalTimelineElement as TimelineElement
} from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import styles from './WorkExperience.module.scss';

import jsonData from '../assets/data/work_experience.json';

const WorkExperience: FC = () => {
  return (<>
    <Timeline>
      {jsonData.map((job, i) => (
        <TimelineElement
          key={i}
          className="vertical-timeline-element--work"
          contentStyle={{...job.style}}
          contentArrowStyle={{ borderRight: `7px solid  ${job.icon.color}` }}
          date={job.date}
          iconStyle={{...job.style}}
          icon={<Icon color={job.icon.color as any} name={job.icon.name as any} size="big" className={styles.icon}/>}
        >
          <Label
            as='a'
            color={job.icon.color as any}
            ribbon={(i + 2) % 2 === 0 ? true : "right"}
            className={(i + 2) % 2 === 0 ? styles.ribbon_left : styles.ribbon_right}
          >
            {job.description.industry}
          </Label>
          <br/><br/>
          <h3 className="vertical-timeline-element-title">{job.title} @{job.company}</h3>
          <h4 className="vertical-timeline-element-subtitle">{job.detail} #{job.description.function}</h4>
          <Segment.Group>
            <Segment basic className={styles.label}>
              <Label color={job.icon.color as any} horizontal>
                company size
              </Label>
              <Rating icon='heart' defaultRating={job.size} maxRating={7} disabled />
            </Segment>
            <Segment basic className={styles.label}>
              <Label color={job.icon.color as any} horizontal>
                method
              </Label>
              {job.description.method}
            </Segment>
            <Segment basic className={styles.label}>
              <Label color={job.icon.color as any} horizontal>
                focus
              </Label>
              {job.description.focus}
            </Segment>
            <Segment basic>
              {job.tags.map((tag, j) => (
                <Label
                  as='a'
                  tag
                  key={j}
                  className={styles.tag}
                  color={job.icon.color as any}
                >
                  {tag}
                </Label>
              ))}
            </Segment>
            {job.assets.website && (<Segment basic>
              <Button icon="world" href={job.assets.website} as="a" target="_blank" rel="noreferrer"/>
            </Segment>)}
          </Segment.Group>
        </TimelineElement>
      ))}
    </Timeline>
  </>);
}

export default WorkExperience;
