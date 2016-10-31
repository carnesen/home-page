import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

import '@carnesen/styles/css/default.css'

import Root from './root'

const App = () => (
  <ThemeProvider>
    <Root />
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
