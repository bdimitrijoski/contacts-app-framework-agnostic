import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="navbar navbar-static-top contacts-app-nav" id="top">
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#bs-navbar"
            aria-controls="bs-navbar"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to="/" className="navbar-brand">
            Contacts
          </Link>
        </div>
        <nav id="bs-navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
