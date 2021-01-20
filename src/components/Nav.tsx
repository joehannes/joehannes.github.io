import React, { FC, useEffect } from 'react';
import {
  Button,
} from 'semantic-ui-react';

import styles from './Nav.module.scss';

const Nav: FC = () => (
  <nav className={styles.position}>
      <Button as="a" circular color="pink" icon="mail" href="mailto:johannes.neugschwentner@gmail.com" />
      <br/>
      <Button as="a" circular color="green" icon="phone" href="tel:+4368181152357" />
      <br/>
      <Button as="a" circular color="vk" icon="address card" href="https://bit.ly/jesusgeek" target="_blank" rel="noreferrer"/>
      <br/>
      <Button as="a" circular color="purple" icon="github" href="https://github.com/joehannes" target="_blank" rel="noreferrer" />
      <br/>
      <Button as="a" circular color="facebook" icon="facebook" href="https://facebook.com/johannes.neugschwentner" target="_blank" rel="noreferrer"/>
      <br/>
      <Button as="a" circular color="blue" icon="linkedin" href="https://linkedin.com/in/joehannes" target="_blank" rel="noreferrer"/>
      <br/>
      <Button as="a" circular color="orange" icon="stack overflow" href="https://stackoverflow.com/users/1190888/joehannes" target="_blank" rel="noreferrer"/>
      <br/>
      <Button as="a" circular color="red" icon="video" href="https://bit.ly/iamjoehannes-webdev" target="_blank" rel="noreferrer"/>
      <br/>
  </nav>
);


export default Nav;
