import React from "react";
import "../App/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/shared/MyNavBar/MyNavBar";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/AboutPage/About";
import Events from "../components/pages/EventsPage/Events";
import Programs from "../components/pages/ProgramsPage/Programs";
import Resources from "../components/pages/ResourcesPage/Resources";
import ContactForm from "../components/shared/ContactForm/ContactForm";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Router>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Resources" component={Resources} />
          <Route path="/Events" component={Events} />
          <Route path="/Programs" component={Programs} />
          <Route path="/Contact" component={ContactForm} />
        </Router>
      </div>
    );
  }
}

export default App;
