import React,{ Component, Suspense } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import {
  Router,
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import { connect } from "react-redux";

import history  from "./redux/helpers/history";


const HomeModal =React.lazy(()=>import("./pages/Public/HomeModal"))
const Dashboard =React.lazy(()=>import("./components/layouts/Dashboard"))
function App() {
  const loading = () => (
    <div class="loading-bar">
      <div class="loading-circle"></div>
      <p id="loading">Loading</p>
    </div>
  );
  return (
    <div className="App">
      <Router history={history}>
        <Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/" component={HomeModal}></Route>
            <Route exact path="/acceuil" component={Dashboard}></Route>         
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
