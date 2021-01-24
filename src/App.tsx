import React, { useState } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import Background from './components/Background';
import Nav from './components/Nav';
import Dashboard from './routes/Dashboard';

import store from './store';
import './App.scss';

function App() {
  const getColorMix = (color1: string, color2: string, ratio: number = 0.5) => {
    var hex = function(x: any) {
        x = x.toString(16);
        return (x.length === 1) ? '0' + x : x;
    };

    color1 = color1.slice(1);
    color2 = color2.slice(1);

    var r = Math.ceil(parseInt(color1.substring(0,2), 16) * ratio + parseInt(color2.substring(0,2), 16) * (1-ratio));
    var g = Math.ceil(parseInt(color1.substring(2,4), 16) * ratio + parseInt(color2.substring(2,4), 16) * (1-ratio));
    var b = Math.ceil(parseInt(color1.substring(4,6), 16) * ratio + parseInt(color2.substring(4,6), 16) * (1-ratio));

    return `#${hex(r)}${hex(g)}${hex(b)}`;
  }

  const constructBackground = (color: string) => `radial-gradient(circle, ${color} 0%, ${black} 90%)`;

  const black = "#1B1C1D";
  const olive = "#32CD32";
  const cyan = "#5EC4D8";
  const blue = "#0E6EB8";
  const backgrounds = [cyan, blue, olive];

  let [ background, setBackground ] = useState(constructBackground(backgrounds[0]));

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop } = e!.currentTarget;
    const viewportHeight = window.innerHeight;

    const screenNr = Math.floor(scrollTop / viewportHeight);

    if (screenNr > 1) {
      setBackground(constructBackground(backgrounds[2]));
      return;
    }

    const mixRatio = 1 - (scrollTop % viewportHeight) / viewportHeight;
    const backgroundMix = getColorMix(backgrounds[screenNr], backgrounds[screenNr +1], mixRatio);

    setBackground(constructBackground(backgroundMix));
  }

  return (
    <Provider store={store}>
      <Router>
        <Nav />
        <Switch>
          <Route path="/">
            <Background
              style={{ background }}
            >
              <Scrollbars
                onScroll={handleScroll}
              >
                <Dashboard/>
              </Scrollbars>
            </Background>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
