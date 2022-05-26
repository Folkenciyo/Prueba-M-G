import React from "react";
import Home from "./pages/Home";
import FileLoader from "./pages/FileLoader";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FileLoader" element={<FileLoader />} />
      </Routes>
      </header>
    </div>
  );
};

export default App;
