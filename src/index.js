import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  colors: {
    background: "#efefef",
    black: '#212121',
    white: '#fff',
    lightgrey: 'lightgrey',
    midgrey: '#a9a9a9',
    grey: 'grey',
    red: 'red',
    green: 'green',
    orange: 'orange',
    deepsky: "#00bfff",
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
