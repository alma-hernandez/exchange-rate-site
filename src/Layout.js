// Layout.js
import React from 'react';
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
      <Link to="/"><span className="navbar-brand mb-0 h1">Currency Exchange Rates</span></Link>
      <Link to="/currencyconverter"><span className="navbar-brand mb-0 h1">Currency Converter</span></Link>
      </nav>
      <div className="container py-3">
        {props.children}
      </div>
      <footer className="p-3 bg-light">
        <div className="mb-2">
          <a className="badge badge-dark" href="https://alma-hernandez.github.io/exchange-rate-site/" target="_blank">GitHub</a>
        </div>
        <div>
          <span className="mr-3 text-secondary">Built by <a href="https://www.altcademy.com" target="_blank">Altcademy</a> with ☕ and 💜</span>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Layout;