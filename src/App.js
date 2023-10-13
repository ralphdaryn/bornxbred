import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};
export default App;
