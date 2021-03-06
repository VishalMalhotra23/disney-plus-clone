import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
