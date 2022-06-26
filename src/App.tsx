import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from 'Layout';
import { BrowserRouter } from 'react-router-dom';
import './Styles/Animations.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from 'Theme/MaterialUiTheme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ThemeProvider>

    </div>
  );
}

export default App;
