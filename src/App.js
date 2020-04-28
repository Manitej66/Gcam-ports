import React, { useEffect } from "react";
import "./App.css";
import Header from "./Navbar";
import Brands from "./brands";
import Show from "./detailed";
import Dev from "./dev";
import About from "./contactus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Brands} />
          <Route path="/Request" component={About} />
          <Route path="/Contact" component={Dev} />
          <Route path="/POCO" render={(props) => <Show brand="POCO" />} />
          <Route path="/Redmi" render={(props) => <Show brand="Redmi" />} />
          <Route path="/Realme" render={(props) => <Show brand="Realme" />} />
          <Route path="/Samsung" render={(props) => <Show brand="Samsung" />} />
          <Route path="/Oneplus" render={(props) => <Show brand="Oneplus" />} />
          <Route path="/Asus" render={(props) => <Show brand="Asus" />} />
          <Route path="/OPPO" render={(props) => <Show brand="OPPO" />} />
          <Route path="/Xiaomi" render={(props) => <Show brand="Xiaomi" />} />
          <Route path="/Nokia" render={(props) => <Show brand="Nokia" />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
