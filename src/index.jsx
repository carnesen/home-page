import React from 'react';
import ThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

import '@carnesen/styles/css/default.css';
import Home from './home';
import BottomBar from './bottom-bar';

export default function App() {
  return (
    <ThemeProvider>
      <div>
        <Home />
        <BottomBar />
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {};
