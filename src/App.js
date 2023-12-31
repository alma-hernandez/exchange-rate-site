
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import Home from './Home';
import CurrencyConverter from './CurrencyConverter';



const App = () => {
  return (
    <Router>
      <Layout>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/currencyconverter" component={CurrencyConverter} />
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
      </Layout>
    </Router>
  );
}

export default App;
