import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

import Dalendar from "./components/Dalendar";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  html, body, #root {
    font-family: 'Source Sans Pro', sans-serif;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyles />
        <h1>Dalendar</h1>
        <Dalendar />
      </Container>
    );
  }
}

export default App;
