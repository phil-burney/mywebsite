import ButtonBar from "./UserInput/ButtonGroup";
import LinkButton from "../Components/UserInput/LinkButton";
import AboutMe from "../Webpages/AboutMe"
import Home from "../Webpages/Home"
import AboutWebsite from "../Webpages/AboutWebsite"
import Resume from "../Webpages/Resume"
import ContactMe from "../Webpages/ContactMe"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"

const title="home";
const aboutme = "aboutme"
const aboutsite="aboutwebsite"
const resume="resume"
const contact="contactme"

export default class Header extends React.Component {
  render() {
      return (
        
          
        <div className="App">  
          
        <Router>
              <ButtonBar color="green" buttonMinWidth={100}>
                <LinkButton  key={title} id={title} link="" text="Phil Burney Website"></LinkButton>
                <LinkButton key={aboutme} id={aboutme} link = {aboutme} text = "About me"></LinkButton>
                <LinkButton  key={resume} id={resume} link = {resume} text = "Resume"></LinkButton>
                <LinkButton key={aboutsite} id={aboutsite} link= {aboutsite} text = "About the website"></LinkButton>
                <LinkButton key={contact} id={contact} link= {contact} text = "Contact Me"></LinkButton>
              </ButtonBar>

          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/aboutme" exact component={() => <AboutMe />} />
            <Route path="/aboutwebsite" exact component={() => <AboutWebsite />} />
            <Route path="/resume" exact component={() => <Resume />} />
            <Route path="/contactme" exact component={() => <ContactMe />} />
          </Switch>
        </Router>
              
          </div>
      )
  }
    }

