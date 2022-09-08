import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => (
  <div className="App">
    <Header />
    <main>
      <LandingPage />
    </main>
    <Footer />
  </div>
);

export default App;
