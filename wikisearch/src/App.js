import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route } from 'react-router';
import Home from './containers/Home/Home';
import WordSearch from './containers/WordSearch/WordSearch';
import Generator from './containers/Generator/Generator';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path='/w' component={WordSearch} />
        <Route path='/generate' component={Generator} />
        <Route path='/login'  component={Login} />
        <Route path='/' exact component={Home} />
      </Layout>
    </div>
  );
}

export default App;
