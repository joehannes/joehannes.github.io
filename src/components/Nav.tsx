import React, { FC, useEffect } from 'react';
import {
  Button,
} from 'semantic-ui-react';
import { GlobalHotKeys } from 'react-hotkeys';

import styles from './Nav.module.scss';

const Nav: FC = () => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  })

  let activePage = 0;
  const nrOfPages = () => {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    return Math.round(height / window.innerHeight);
  };

  const handleScroll = (e: Event) => {
    let scrollTop = window.pageYOffset;
    let viewportHeight = window.innerHeight;
    activePage = Math.floor(scrollTop / viewportHeight);
  }

  const prevPage = () => {
    if (activePage > 0) {
      window.scrollTo({ top: window.innerHeight * (activePage - 1), behavior: 'smooth' });
    } else if (window.pageYOffset > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const nextPage = () => {
    const total = nrOfPages();
    if (activePage < (total - 1)) {
      window.scrollTo({ top: window.innerHeight * (activePage + 1), behavior: 'smooth' });
    }
  }

  const keyMap = {
    MOVE_UP: "ArrowUp",
    MOVE_DOWN: "ArrowDown",
  };

  const keyHandlers = {
    MOVE_UP: (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      prevPage();
    },
    MOVE_DOWN: (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      nextPage();
    },
  };

  return (<>
    <GlobalHotKeys
      keyMap={keyMap}
      handlers={keyHandlers}
    />
    <nav className={styles.position}>
        <Button onClick={prevPage} circular color="black" icon="caret up" />
        <Button circular color="black" icon="keyboard" inverted />
        <Button onClick={nextPage} circular color="black" icon="caret down" />
    </nav>
  </>);
}

export default Nav;
