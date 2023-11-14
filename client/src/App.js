import "./App.css";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TestPage from "./pages/TestPage";
import ProfilePage from "./pages/ProfilePage";
import React from "react";

function App() {
  return (
    <div className="App">
      <HashRoutes>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/test"} element={<TestPage />} />
          <Route path={"/profile"} element={<ProfilePage />} />
        </Routes>
      </HashRoutes>
    </div>
  );
}

export default App;
