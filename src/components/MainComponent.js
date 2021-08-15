import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Projects from "./ProjectsComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
class Main extends Component {

render() {
    
    const HomePage = () => {
        return (
            <>
              <div>
              <Header />
              </div>
              <div>
              <Home />
              </div>
              <div>
              <About />
              </div>
              <div>
              <Projects />
              </div>
              <div>
              <Contact />
              </div>
            
            </>
          );
      
    }
    
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />            
                <Route path='/about' component={About} />
                <Route path='/projects' component={Projects} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
  }
}
  
export default withRouter(Main);
