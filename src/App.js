import React from "react";
import s from './App.module.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Info from "./components/Info/Info";

function App() {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Navbar />
        <Routes>
          <Route path='/'
            element={<Home />}
          />
          <Route path='/info/*'
            element={<Info />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
