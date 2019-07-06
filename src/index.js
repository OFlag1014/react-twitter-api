import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';

//import css 
import './index.css';

//import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//import routers
import indexRoutes from "./routes/index";

//import redux store
import store from './store';

//import layout components
import Footer from "./pages/layouts/footer";
import Header from "./pages/layouts/header";

const hist = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={hist}>
          <Header />
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} component={prop.component} key={key} />;
            })}
          </Switch>
          <Footer />
        </Router>
    </Provider>,  
    document.getElementById("root")
  );
