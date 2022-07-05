import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from 'Layout';
import { BrowserRouter } from 'react-router-dom';
import './Styles/Animations.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from 'Theme/MaterialUiTheme'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ThemeProvider>
      </ParallaxProvider>

    </div>
  );
}

export default App;
