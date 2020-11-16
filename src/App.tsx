import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import ContactsList from "./pages/Contacts";

function App() {
  return (
    <div className="app">
      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/contacts" exact component={ContactsList} />
    </div>
  );
}

export default App;
