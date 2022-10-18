import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Layout from "Layout";
import { HashRouter } from "react-router-dom";
import "./Styles/Animations.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import theme from "Theme/MaterialUiTheme";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <Layout />
          </HashRouter>
        </ThemeProvider>
      </ParallaxProvider>
    </div>
  );
}

export default App;
