
import './App.css';
import Header from './Components/Header.js'
import AboutMe from './Webpages/AboutMe';
import AboutWebsite from './Webpages/AboutWebsite';
import Home from './Webpages/Home';
import Resume from './Webpages/Resume';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
    <Header></Header>

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/aboutme" exact component={() => <AboutMe />} />
          <Route path="/aboutwebsite" exact component={() => <AboutWebsite />} />
          <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
      </Router>
  </div>
    </div>

  );
}

export default App;
