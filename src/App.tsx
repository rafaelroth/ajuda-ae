import React from 'react';
import styled from "styled-components";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const StyledExample = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
  .loading {
    animation: spin 2s linear infinite;
  }
`;

const Example = () => (
  <StyledExample>
    Hello word
  </StyledExample>
);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Example} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
