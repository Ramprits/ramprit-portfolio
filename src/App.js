import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./pages/welcome";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Redirect from="/" to="/welcome" exact />
            <Route path="/welcome" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
