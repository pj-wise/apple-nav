import React from "react";
import { Route } from "react-router-dom";
import "./scss/App.css";
import NavWrap from "./components/NavWrap";

function App() {
  return (
    <div className="App">
      <Route path="/" render={props => <NavWrap {...props} data={data} />} />
    </div>
  );
}

export default App;
