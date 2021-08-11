import React, { Component } from "react";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
class Main extends Component {

render() {
    
    return (
      <>
        <div>
        <Header />
        </div>
        <div>
        <Home />
        </div>
      
      </>
    );
  }
}
  
export default withRouter(connect(Main));
