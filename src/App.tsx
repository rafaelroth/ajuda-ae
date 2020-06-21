import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./pages/home";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
