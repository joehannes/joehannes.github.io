import React, { FC } from 'react';
import {
  Container,
} from 'semantic-ui-react';

import Welcome from '../pages/Welcome';
import Motivation from '../pages/Motivation';

const Dashboard: FC = () => {
  return (<>
    <Container
      fluid
      className="page__container"
    >
      <Welcome />
    </Container>
    <Container
      fluid
      className="page__container"
    >
      <Motivation />
    </Container>
  </>);
}

export default Dashboard;
