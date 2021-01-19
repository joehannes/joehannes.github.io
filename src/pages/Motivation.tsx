import React, { FC, useState } from 'react';
import {
  Container,
  Grid,
  Segment,
} from 'semantic-ui-react';

import styles from './Motivation.module.scss';

const Motivation: FC = () => {
  let [hovered, setHovered] = useState(0);

  return (<>
    <Segment.Group className="style__border--none">
      <Segment basic textAlign="center" className="dashboard__subtitle">
        <h1>Motivation</h1>
      </Segment>
      <Segment basic>
        <article className={styles.motivation__article}>
          <Grid divided>
            <Grid.Row columns={4}>
              <Grid.Column
                className={`${styles.newspaper__column} dashboard__subtitle ${hovered === 1 ? styles.active : ''} ${hovered !== 0 && hovered !== 1 ? styles.inactive : ''}`}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(0)}
              >
                <h4>Background</h4>
                <p>
                  I ❤ to code meaningful stuff.<br/>
                  I ❤ mathematics and useful visualizations, applications of algorithms and thoughtful presentations.
                </p><p>
                  I got my <span className="text--pronounced">degree/diploma</span>
                  <ul>
                    <li>in 2007</li>
                    <li>in Media Technology <br/>[Dipl.-Ing. (FH)],</li>
                    <li>at the University of Applied Sciences St. P&ouml;lten, Austria,</li>
                  </ul>
                  and started out as a Flasher.</p>
              </Grid.Column>
              <Grid.Column
                className={`${styles.newspaper__column} dashboard__subtitle ${hovered === 2 ? styles.active : ''} ${hovered !== 0 && hovered !== 2 ? styles.inactive : ''}`}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(0)}
              >
                <h4>Evolution</h4>
                <p>
                    Via PHP and some DB-hacking <span className="text--pronounced">I temporarily became a Full-Stacker</span> in Groovy/Grails.</p>
                <p>
                  Falling in ❤ with the representational (UI/UX) capabilities of Javascript I switched to the frontend full time.
                  <span className="text--pronounced">10 years</span> hence, I came quite a way, via jQuery and Bootstrap, AngularJS to <span className="text--pronounced">nowadays mostly Typescript/React</span>.<p></p>
                  I was almost all the time involved with some sidekick pet/hobby-projects, that would at the same time teach me
                  the skills I still lacked.
                  As of 2021 I'm currently into my own `tailwindcss`-like UI/UX project called <a href="https://github.com/prudencss" target="_blank" rel="noreferrer">`prudencss`</a>.
                </p>
              </Grid.Column>
              <Grid.Column
                className={`${styles.newspaper__column} dashboard__subtitle ${hovered === 3 ? styles.active : ''} ${hovered !== 0 && hovered !== 3 ? styles.inactive : ''}`}
                onMouseEnter={() =>setHovered(3)}
                onMouseLeave={() =>setHovered(0)}
              ><h4>Relevant Experience</h4>
                <p>
              I got about <span className="text--pronounced">3 years of experience in React and a bit more in Typescript</span>.
                            Also, while I generally speaking might boast of <span className="text--pronounced">considerable international experience</span> - having worked in teams in London, Amsterdam, Berlin and Vienna - I already added about <span className="text--pronounced">3 years of fully remote experience</span> to my portfolio.</p><p>Most of my remote experience I have been working from a Caribbean retreat, which is where I feel quite comfortable. I can manage <span className="text--pronounced">100% office hour overlap with the Americas</span> and <span className="text--pronounced">5 hours with CET</span> - in a sustainable manner.
                </p>
              </Grid.Column>
              <Grid.Column
                className={`${styles.newspaper__column} dashboard__subtitle ${hovered === 4 ? styles.active : ''} ${hovered !== 0 && hovered !== 4 ? styles.inactive : ''}`}
                onMouseEnter={() => setHovered(4)}
                onMouseLeave={() => setHovered(0)}
              >
                <h4>Attitude &amp; Mindset</h4>
                <p>
                  I've learnt to know the important bits and pieces about remote work. I understand that a <span className="text--pronounced">pro-active/self-starter </span>
                  attitude is favorable. I found communication is of great importance and am careful to always try and convey meaning in a clear and concise way. As of timeframes and deadlines: I got different approaches for different situations, adapting myself to the company culture. Generally speaking, I always try to deliver and with <span className="text--pronounced">a reasonable mix of tech, quality, and speed</span>.
                </p><p>
                  I'm usually open to all kinds of propositions and discussions, <a href="mailto:johannes.neugschwentner@gmail.com">drop me a line</a>.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </article>
      </Segment>
      <Segment basic>
      </Segment>
    </Segment.Group>
  </>);
}

export default Motivation;
