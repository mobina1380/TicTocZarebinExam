import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import Hometictoc from "./features/tictoc/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div> 
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Hometictoc />}>
        </Route>
      </Routes>
    </BrowserRouter>
      </div>

  );
}

export default App;
