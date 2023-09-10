
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Layout from './Layout'


const App = () => {
  return (

    <Router>
      <Layout>
      <Switch>
        <Route path="/" exact render={() => <h1>Hello World</h1>} />
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
      </Layout>
    </Router>

  );
}

export default App;
