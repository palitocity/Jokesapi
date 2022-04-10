import "./App.css";
import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/main";
import Page from "./components/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/jokes" element={<Page />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
