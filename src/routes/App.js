import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Detail from "./Detail";
import Navigation from "../components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;