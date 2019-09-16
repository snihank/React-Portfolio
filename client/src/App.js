import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../src/components/NavBar";
import Home from "./pages/Home";
import ErrorMsg from "./pages/ErrorMsg";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

import Footer from "./components/Footer";



import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />

          <Route component={ErrorMsg} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
