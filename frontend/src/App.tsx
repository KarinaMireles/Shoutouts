import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShoutOutList from "./ShoutOutList";
import UserShoutOuts from "./UserShoutOuts";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ShoutOutList} />
        <Route path="/user/:name" component={UserShoutOuts} />
      </Switch>
    </Router>
  );
}

export default App;
