import React from "react";
import HomePage from "./pages/homepages/homepage.component";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./pages/homepages/homepage.styles.scss";

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
