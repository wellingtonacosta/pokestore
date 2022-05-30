import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import theme from "./pages/Shop/theme";

import { ThemeProvider } from "@material-ui/core";
import Routes from "./routes";
import "./styles/styles";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Router>
  );
}

export default App;
